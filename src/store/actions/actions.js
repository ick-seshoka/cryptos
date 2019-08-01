import * as actionTypes from './actiontypes';
import { apiFetchCryptos } from '../../api/calls'; 

export const fetchCryptos = ( cryptos ) => {
    return {
        type: actionTypes.FETCH_CRYPTOS,
        cryptos: cryptos,
    }
}

export const getCryptos = () => {
    return dispatch => {
        apiFetchCryptos().then( response => {
            dispatch(fetchCryptos(response));
        });
    }
}