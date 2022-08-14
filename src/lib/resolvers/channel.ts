import { ChannelMentionRegex, ChannelTypes } from '@sapphire/discord.js-utilities';
import { container } from '@sapphire/pieces';
import { Result } from '@sapphire/result';
import type { BaseCommandInteraction, Message, Snowflake } from 'discord.js';
import { Identifiers } from '../errors/Identifiers';

export function resolveChannel(
	parameter: string,
	messageOrInteraction: Message | BaseCommandInteraction
): Result<ChannelTypes, Identifiers.ArgumentChannelError> {
	const channelId = (ChannelMentionRegex.exec(parameter)?.[1] ?? parameter) as Snowflake;
	const channel = (messageOrInteraction.guild ? messageOrInteraction.guild.channels : container.client.channels).cache.get(channelId);

	if (channel) {
		return Result.ok(channel as ChannelTypes);
	}

	return Result.err(Identifiers.ArgumentChannelError);
}
