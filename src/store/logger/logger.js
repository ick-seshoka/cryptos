export const logger = state => {
    return next => {
        return action => {
            console.log("[Middleware] Dispatching", action);
            const nextAction = next(action);
            console.log("[Middleware] state", state.getState());
            return nextAction;
        }
    }
}