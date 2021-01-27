namespace Redux {
	export const simpleLogger: Middleware = (api) => {
		return (next) => {
			return (action) => {
				if (typeof action === "function") {
					return next(action);
				}
				const value = next(action);
				console.log(action.type, api.getState());
				return value;
			};
		};
	};
}