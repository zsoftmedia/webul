declare namespace Redux {
	
	export interface ThunkDispatch<S, E, A extends Action> {
		<T extends A>(action: T): T;
		<R>(asyncAction: ThunkAction<R, S, E, A>): R;
	}

	export type ThunkAction<R, S, E, A extends Action> = (
		dispatch: ThunkDispatch<S, E, A>,
		getState: () => S,
		extraArgument: E
	) => R;

	export type ThunkMiddleware<S = {}, A extends Action = AnyAction, E = undefined> = Middleware<ThunkDispatch<S, E, A>, S, ThunkDispatch<S, E, A>>;

	const thunk: ThunkMiddleware & {
		withExtraArgument<E>(extraArgument: E): ThunkMiddleware<{}, AnyAction, E>
	}
}

declare class ReduxThunk {
	static default: typeof Redux.thunk;
}