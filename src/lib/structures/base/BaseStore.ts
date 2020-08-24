import { Piece, PieceContextExtras, Store } from '@sapphire/pieces';
import type { Client } from 'discord.js';
import { Events } from '../../types/Events';
import type { BasePiece } from './BasePiece';

declare type Constructor<T> = new (...args: any[]) => T;

export class BaseStore<T extends BasePiece> extends Store<T> {
	public readonly client: Client;

	public constructor(client: Client, Ctor: Constructor<T>) {
		super(Ctor, {
			onError: (error) => client.emit(Events.Error, error),
			onUnload: (store, piece) => client.emit(Events.PieceUnload, (store as unknown) as Store<Piece>, piece),
			onPostLoad: (store, piece) => client.emit(Events.PiecePostLoad, (store as unknown) as Store<Piece>, piece)
		});
		this.client = client;
	}

	protected get extras(): PieceContextExtras {
		return { ...super.extras, client: this.client };
	}
}
