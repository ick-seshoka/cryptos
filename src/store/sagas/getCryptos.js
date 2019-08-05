import { put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions';
import { apiFetchCryptos } from '../../api/calls';

export function* getCryptos() {
    let data = '';
    yield apiFetchCryptos().then( response => {
        data = response.data;
    });

    put(actions.fetchCryptos(data));
}