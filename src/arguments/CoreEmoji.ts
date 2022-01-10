import type { PieceContext } from '@sapphire/pieces';
import { Identifiers } from '../lib/errors/Identifiers';
import { EmojiObject, resolveEmoji } from '../lib/resolvers/emoji';
import { Argument, ArgumentResult } from '../lib/structures/Argument';

export default class extends Argument<EmojiObject> {
	public constructor(context: PieceContext) {
		super(context, { name: 'emoji' });
	}

	public run(parameter: string): ArgumentResult<EmojiObject> {
		const resolved = resolveEmoji(parameter);
		return resolved.success
			? this.ok(resolved.value)
			: this.error({
					parameter,
					identifier: Identifiers.ArgumentEmojiError,
					message: 'The argument did not resolve to an emoji.'
			  });
	}
}
