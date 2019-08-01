import axios from 'axios';
import { SERVER_NAME } from '../constants';

export const request = axios.create({
    baseURL: SERVER_NAME + '/v1/cryptocurrency',
    headers: { 'X-CMC_PRO_API_KEY': '32758cc9-bc0d-4dcd-a3fa-deeffd987e85' }
});