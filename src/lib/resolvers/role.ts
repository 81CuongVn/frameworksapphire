import { RoleMentionRegex, SnowflakeRegex } from '@sapphire/discord-utilities';
import { Result } from '@sapphire/result';
import type { Guild, Role, Snowflake } from 'discord.js';
import { Identifiers } from '../errors/Identifiers';

export async function resolveRole(parameter: string, guild: Guild): Promise<Result<Role, Identifiers.ArgumentRoleError>> {
	const role = (await resolveById(parameter, guild)) ?? resolveByQuery(parameter, guild);

	if (role) {
		return Result.ok(role);
	}

	return Result.err(Identifiers.ArgumentRoleError);
}

async function resolveById(argument: string, guild: Guild): Promise<Role | null> {
	const roleId = RoleMentionRegex.exec(argument) ?? SnowflakeRegex.exec(argument);
	return roleId ? guild.roles.fetch(roleId[1] as Snowflake) : null;
}

function resolveByQuery(argument: string, guild: Guild): Role | null {
	const lowerCaseArgument = argument.toLowerCase();
	return guild.roles.cache.find((role) => role.name.toLowerCase() === lowerCaseArgument) ?? null;
}
