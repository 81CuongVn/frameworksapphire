import { isStageChannel } from '@sapphire/discord.js-utilities';
import type { Result } from '@sapphire/result';
import type { Guild, StageChannel } from 'discord.js';
import { Identifiers } from '../errors/Identifiers';
import { resolveGuildChannelPredicate } from '../utils/resolvers/resolveGuildChannelPredicate';

export function resolveGuildStageVoiceChannel(
	parameter: string,
	guild: Guild
): Result<StageChannel, Identifiers.ArgumentGuildChannelError | Identifiers.ArgumentGuildStageVoiceChannelError> {
	return resolveGuildChannelPredicate(parameter, guild, isStageChannel, Identifiers.ArgumentGuildStageVoiceChannelError);
}
