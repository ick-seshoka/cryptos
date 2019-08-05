import { put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions';
import { apiFetchCryptos } from '../../api/calls';

export function* getCryptos() {
    let data = yield apiFetchCryptos();

    console.log(data);

    yield put(actions.fetchCryptos(data));
}