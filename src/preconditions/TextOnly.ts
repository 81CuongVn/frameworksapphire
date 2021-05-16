import type { Message } from 'discord.js';
import { Identifiers } from '../lib/errors/Identifiers';
import { Precondition, PreconditionResult } from '../lib/structures/Precondition';

export class CorePrecondition extends Precondition {
	public run(message: Message): PreconditionResult {
		return message.channel.type === 'text'
			? this.error({ identifier: Identifiers.PreconditionTextOnly, message: 'You can only run this command in text channels.' })
			: this.ok();
	}
}
