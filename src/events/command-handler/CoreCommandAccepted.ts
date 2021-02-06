import type { PieceContext } from '@sapphire/pieces';
import { Event } from '../../lib/structures/Event';
import { CommandAcceptedPayload, Events } from '../../lib/types/Events';

export class CoreEvent extends Event<Events.CommandAccepted> {
	public constructor(context: PieceContext) {
		super(context, { event: Events.CommandAccepted });
	}

	public async run(payload: CommandAcceptedPayload) {
		const { message, command, parameters, context } = payload;
		const args = await command.preParse(message, parameters, context);
		try {
			message.client.emit(Events.CommandRun, message, command, payload);
			const result = await command.run(message, args, context);
			message.client.emit(Events.CommandSuccess, { ...payload, result });
		} catch (error) {
			message.client.emit(Events.CommandError, error, { ...payload, piece: command });
		} finally {
			message.client.emit(Events.CommandFinish, message, command, payload);
		}
	}
}
