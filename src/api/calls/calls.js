import { request } from '../request';

export const apiFetchCryptos = () => {
    return request({
        method: 'POST',
        url: '/listings/latest',

    }).then( response => {
        console.log(response);
        if ( response.data.status.error_code == 0 ) {
            return response.data;

        } else {
            return response.data;
        }

    }).catch( error => {
        return {
            status: {
                error_code: 500,
                error_message: 'Failed to fetch cryptos 😔, We think the mine might be empty 🙆🏾‍♂️',
            },
        }
    });
}