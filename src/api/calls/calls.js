import { request } from '../request';

export const apiFetchCryptos = () => {
    return request({
        method: 'POST',
        url: '/listings/latest',

    }).then( response => {
        return response;

    }).catch( error => {
        // return {
            // status: {
            //     error_message: 'cryptos fetch failed'
            // },
            return { 
                "status": {
                    "timestamp": "2019-08-01T11:47:30.270Z",
                    "error_code": 0,
                    "error_message": null,
                    "elapsed": 16,
                    "credit_count": 1
                },
                "data": [
                    {
                        "id": 1,
                        "name": "Bitcoin",
                        "symbol": "BTC",
                        "slug": "bitcoin",
                        "num_market_pairs": 7736,
                        "date_added": "2013-04-28T00:00:00.000Z",
                        "tags": [
                            "mineable"
                        ],
                        "max_supply": 21000000,
                        "circulating_supply": 17850787,
                        "total_supply": 17850787,
                        "platform": null,
                        "cmc_rank": 1,
                        "last_updated": "2019-08-01T11:46:32.000Z",
                        "quote": {
                            "USD": {
                                "price": 9972.39715476,
                                "volume_24h": 16939768960.4589,
                                "percent_change_1h": 0.243785,
                                "percent_change_24h": 1.89005,
                                "percent_change_7d": -0.953092,
                                "market_cap": 178015137489.0268,
                                "last_updated": "2019-08-01T11:46:32.000Z"
                            }
                        }
                    },
                    {
                        "id": 1027,
                        "name": "Ethereum",
                        "symbol": "ETH",
                        "slug": "ethereum",
                        "num_market_pairs": 5492,
                        "date_added": "2015-08-07T00:00:00.000Z",
                        "tags": [
                            "mineable"
                        ],
                        "max_supply": null,
                        "circulating_supply": 107139341.0615,
                        "total_supply": 107139341.0615,
                        "platform": null,
                        "cmc_rank": 2,
                        "last_updated": "2019-08-01T11:46:23.000Z",
                        "quote": {
                            "USD": {
                                "price": 213.878687862,
                                "volume_24h": 6124671996.94681,
                                "percent_change_1h": 0.235693,
                                "percent_change_24h": -0.0286015,
                                "percent_change_7d": -3.71897,
                                "market_cap": 22914821684.632915,
                                "last_updated": "2019-08-01T11:46:23.000Z"
                            }
                        }
                    },
                    {
                        "id": 52,
                        "name": "XRP",
                        "symbol": "XRP",
                        "slug": "ripple",
                        "num_market_pairs": 438,
                        "date_added": "2013-08-04T00:00:00.000Z",
                        "tags": [],
                        "max_supply": 100000000000,
                        "circulating_supply": 42872646068,
                        "total_supply": 99991387607,
                        "platform": null,
                        "cmc_rank": 3,
                        "last_updated": "2019-08-01T11:47:03.000Z",
                        "quote": {
                            "USD": {
                                "price": 0.314182900733,
                                "volume_24h": 968103546.642016,
                                "percent_change_1h": -0.0193719,
                                "percent_change_24h": -2.01978,
                                "percent_change_7d": -1.21366,
                                "market_cap": 13469852303.743486,
                                "last_updated": "2019-08-01T11:47:03.000Z"
                            }
                        }
                    },
                    {
                        "id": 2,
                        "name": "Litecoin",
                        "symbol": "LTC",
                        "slug": "litecoin",
                        "num_market_pairs": 574,
                        "date_added": "2013-04-28T00:00:00.000Z",
                        "tags": [
                            "mineable"
                        ],
                        "max_supply": 84000000,
                        "circulating_supply": 62917593.3333857,
                        "total_supply": 62917593.3333857,
                        "platform": null,
                        "cmc_rank": 4,
                        "last_updated": "2019-08-01T11:47:05.000Z",
                        "quote": {
                            "USD": {
                                "price": 97.1205303977,
                                "volume_24h": 3155778073.06636,
                                "percent_change_1h": 0.811462,
                                "percent_change_24h": 3.44039,
                                "percent_change_7d": 2.87547,
                                "market_cap": 6110590035.885212,
                                "last_updated": "2019-08-01T11:47:05.000Z"
                            }
                        }
                    },
                    {
                        "id": 1831,
                        "name": "Bitcoin Cash",
                        "symbol": "BCH",
                        "slug": "bitcoin-cash",
                        "num_market_pairs": 365,
                        "date_added": "2017-07-23T00:00:00.000Z",
                        "tags": [
                            "mineable"
                        ],
                        "max_supply": 21000000,
                        "circulating_supply": 17923375,
                        "total_supply": 17923375,
                        "platform": null,
                        "cmc_rank": 5,
                        "last_updated": "2019-08-01T11:47:09.000Z",
                        "quote": {
                            "USD": {
                                "price": 322.568884321,
                                "volume_24h": 1536992844.73061,
                                "percent_change_1h": 0.230947,
                                "percent_change_24h": -1.38794,
                                "percent_change_7d": 5.47443,
                                "market_cap": 5781523077.016903,
                                "last_updated": "2019-08-01T11:47:09.000Z"
                            }
                        }
                    },
                    {
                        "id": 1839,
                        "name": "Binance Coin",
                        "symbol": "BNB",
                        "slug": "binance-coin",
                        "num_market_pairs": 226,
                        "date_added": "2017-07-25T00:00:00.000Z",
                        "tags": [],
                        "max_supply": 187536713,
                        "circulating_supply": 155536713,
                        "total_supply": 187536713,
                        "platform": null,
                        "cmc_rank": 6,
                        "last_updated": "2019-08-01T11:47:06.000Z",
                        "quote": {
                            "USD": {
                                "price": 28.0544770785,
                                "volume_24h": 263874972.977571,
                                "percent_change_1h": 0.571041,
                                "percent_change_24h": 1.98926,
                                "percent_change_7d": -4.42266,
                                "market_cap": 4363501149.723733,
                                "last_updated": "2019-08-01T11:47:06.000Z"
                            }
                        }
                    },
                    {
                        "id": 825,
                        "name": "Tether",
                        "symbol": "USDT",
                        "slug": "tether",
                        "num_market_pairs": 2744,
                        "date_added": "2015-02-25T00:00:00.000Z",
                        "tags": [],
                        "max_supply": null,
                        "circulating_supply": 4026461172.53656,
                        "total_supply": 4270057493.36343,
                        "platform": {
                            "id": 83,
                            "name": "Omni",
                            "symbol": "OMNI",
                            "slug": "omni",
                            "token_address": "31"
                        },
                        "cmc_rank": 7,
                        "last_updated": "2019-08-01T11:47:11.000Z",
                        "quote": {
                            "USD": {
                                "price": 1.00310011271,
                                "volume_24h": 17676348069.3407,
                                "percent_change_1h": 0.0606601,
                                "percent_change_24h": 0.127204,
                                "percent_change_7d": -0.10789,
                                "market_cap": 4038943655.9938626,
                                "last_updated": "2019-08-01T11:47:11.000Z"
                            }
                        }
                    },
                ]
            }
    });
}