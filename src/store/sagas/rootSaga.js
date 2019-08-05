import { takeEvery } from 'redux-saga/effects';

import { getCryptos } from './getCryptos';
import * as actionTypes from '../actions';

export function* watchGetCryptos() {
    yield takeEvery(actionTypes.FETCH_CRYPTOS, getCryptos);
}