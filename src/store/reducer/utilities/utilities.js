export const updateState = ( state, action ) => {
    return {
        ...state,
        ...action.cryptos,
        fetchingCryptos: false,
        refreshDate: new Date(),
    }
}