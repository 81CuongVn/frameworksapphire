import type { PieceContext } from '@sapphire/pieces';
import { Stopwatch } from '@sapphire/stopwatch';
import { fromAsync, isErr } from '../../lib/parsers/Result';
import { Listener } from '../../lib/structures/Listener';
import { Events, MessageCommandAcceptedPayload } from '../../lib/types/Events';

export class CoreListener extends Listener<typeof Events.MessageCommandAccepted> {
	public constructor(context: PieceContext) {
		super(context, { event: Events.MessageCommandAccepted });
	}

	public async run(payload: MessageCommandAcceptedPayload) {
		const { message, command, parameters, context } = payload;
		const args = await command.messagePreParse(message, parameters, context);

		const result = await fromAsync(async () => {
			message.client.emit(Events.MessageCommandRun, message, command, { ...payload, args });

			const stopwatch = new Stopwatch();
			const result = await command.messageRun(message, args, context);
			const { duration } = stopwatch.stop();

			message.client.emit(Events.MessageCommandSuccess, { ...payload, args, result, duration });

			return duration;
		});

		if (isErr(result)) {
			message.client.emit(Events.MessageCommandError, result.error, { ...payload, args, duration: result.value ?? -1 });
		}

		message.client.emit(Events.MessageCommandFinish, message, command, { ...payload, args, duration: result.value ?? -1 });
	}
}
