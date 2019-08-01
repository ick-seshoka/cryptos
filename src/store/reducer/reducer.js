import * as actiontypes from '../actions';
import { updateState } from './utilities';

const initialState = {
    status: {},
    data: [],
    fetchingCryptos: true,
    refreshDate: new Date(),
}

const reducer = ( state=initialState, action ) => {
    switch(action.type) {
        case actiontypes.FETCH_CRYPTOS: return updateState(state, action);
        default: return { ...state }
    }
}

export default reducer;