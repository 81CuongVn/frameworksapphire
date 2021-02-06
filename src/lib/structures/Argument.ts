import { AliasPiece, AliasPieceOptions, Awaited } from '@sapphire/pieces';
import type { Message } from 'discord.js';
import type { ArgumentError } from '../errors/ArgumentError';
import type { UserError } from '../errors/UserError';
import { Args } from '../parsers/Args';
import type { Result } from '../parsers/Result';
import type { Command, CommandContext } from './Command';

/**
 * Defines a synchronous result of an [[Argument]], check [[AsyncArgumentResult]] for the asynchronous version.
 */
export type ArgumentResult<T> = Awaited<Result<T, UserError>>;

/**
 * Defines an asynchronous result of an [[Argument]], check [[ArgumentResult]] for the synchronous version.
 */
export type AsyncArgumentResult<T> = Promise<Result<T, UserError>>;

export interface IArgument<T> {
	/**
	 * The name of the argument, this is used to make the identification of an argument easier.
	 */
	readonly name: string;

	/**
	 * The method which is called when invoking the argument.
	 * @param argument The argument to parse.
	 * @param context The context for the method call, contains the message, command, and other options.
	 */
	run(argument: string, context: ArgumentContext<T>): ArgumentResult<T>;
}

/**
 * The base argument class. This class is abstract and is to be extended by subclasses implementing the methods. In
 * Sapphire's workflow, arguments are called when using [[Args]]'s methods (usually used inside [[Command]]s by default).
 *
 * @example
 * ```typescript
 * // TypeScript:
 * import { Argument, ArgumentResult, PieceContext } from '(at)sapphire/framework';
 * import { URL } from 'url';
 *
 * // Define a class extending `Argument`, then export it.
 * // NOTE: You can use `export default` or `export =` too.
 * export class CoreArgument extends Argument<URL> {
 *   public constructor(context: PieceContext) {
 *     super(context, { name: 'hyperlink', aliases: ['url'] });
 *   }
 *
 *   public run(argument: string): ArgumentResult<URL> {
 *     try {
 *       return this.ok(new URL(argument));
 *     } catch {
 *       return this.error(argument, 'ArgumentHyperlinkInvalidURL', 'The argument did not resolve to a valid URL.');
 *     }
 *   }
 * }
 *
 * // Augment the ArgType structure so `args.pick('url')`, `args.repeat('url')`
 * // and others have a return type of `URL`.
 * declare module 'sapphire/framework/dist/lib/utils/Args' {
 *   export interface ArgType {
 *     url: URL;
 *   }
 * }
 * ```
 *
 * @example
 * ```javascript
 * // JavaScript:
 * const { Argument } = require('(at)sapphire/framework');
 *
 * // Define a class extending `Argument`, then export it.
 * module.exports = class CoreArgument extends Argument {
 *   constructor(context) {
 *     super(context, { name: 'hyperlink', aliases: ['url'] });
 *   }
 *
 *   run(argument) {
 *     try {
 *       return this.ok(new URL(argument));
 *     } catch {
 *       return this.error(argument, 'ArgumentHyperlinkInvalidURL', 'The argument did not resolve to a valid URL.');
 *     }
 *   }
 * }
 * ```
 */
export abstract class Argument<T = unknown> extends AliasPiece implements IArgument<T> {
	public abstract run(parameter: string, context: ArgumentContext<T>): ArgumentResult<T>;

	/**
	 * Wraps a value into a successful value.
	 * @param value The value to wrap.
	 */
	public ok(value: T): ArgumentResult<T> {
		return Args.ok(value);
	}

	/**
	 * Constructs an [[ArgumentError]] with a custom type.
	 * @param parameter The parameter that triggered the argument.
	 * @param type The identifier for the error.
	 * @param message The description message for the rejection.
	 */
	public error(options: Omit<ArgumentError.Options<T>, 'argument'>): ArgumentResult<T> {
		return Args.error({ argument: this, ...options });
	}
}

export interface ArgumentOptions extends AliasPieceOptions {}

export interface ArgumentContext<T = unknown> extends Record<PropertyKey, unknown> {
	argument: IArgument<T>;
	args: Args;
	message: Message;
	command: Command;
	commandContext: CommandContext;
	minimum?: number;
	maximum?: number;
	inclusive?: boolean;
}
