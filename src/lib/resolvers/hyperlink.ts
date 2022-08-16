import { Result } from '@sapphire/result';
import { URL } from 'node:url';
import { Identifiers } from '../errors/Identifiers';

export function resolveHyperlink(parameter: string): Result<URL, Identifiers.ArgumentHyperlinkError> {
	const result = Result.from(() => new URL(parameter));
	return result.mapErr(() => Identifiers.ArgumentHyperlinkError) as Result<URL, Identifiers.ArgumentHyperlinkError>;
}
