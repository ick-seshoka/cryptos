import React, { Fragment } from 'react';
import { formatDate, formatNumber } from '../../../helpers';
import NumberFormat from 'react-number-format';

import { TableHeader, HeaderItem, TableRow, TableColumn } from './style';

const cryptosTable = ( props ) => {
    let cryptos = props.cryptosData.map( crypto => {
        return (
            <TableRow key={ crypto.id }>
                <TableColumn tinyWidth>{ crypto.cmc_rank }</TableColumn>
                <TableColumn smallWidth>{ crypto.name }</TableColumn>
                <TableColumn smallWidth>{ crypto.symbol }</TableColumn>
                <TableColumn smallWidth colorBlue>
                    <NumberFormat 
                        value={formatNumber(crypto.quote.USD.price)} 
                        displayType={'text'} 
                        thousandSeparator={true} 
                        prefix={'$'} 
                    />
                </TableColumn>
                <TableColumn largeWidth>
                    <NumberFormat 
                        value={formatNumber(crypto.quote.USD.market_cap)} 
                        displayType={'text'} 
                        thousandSeparator={true} 
                        prefix={'$'} 
                    />
                </TableColumn>
                <TableColumn largeWidth>{ formatNumber(crypto.circulating_supply) }</TableColumn>
                <TableColumn smallWidth>{ formatDate(crypto.date_added) }</TableColumn>
            </TableRow>
        )
    });

    return(
        <Fragment>
            <TableHeader>
                <HeaderItem tinyWidth>#</HeaderItem>
                <HeaderItem smallWidth>name</HeaderItem>
                <HeaderItem smallWidth>symbol</HeaderItem>
                <HeaderItem smallWidth>price</HeaderItem>
                <HeaderItem largeWidth>market cap</HeaderItem>
                <HeaderItem largeWidth>circulating supply</HeaderItem>
                <HeaderItem smallWidth>Date Added</HeaderItem>
            </TableHeader>
            { cryptos }
        </Fragment>
    )
}
    


export default cryptosTable;
