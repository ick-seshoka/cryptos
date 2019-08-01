import React, { Fragment } from 'react';

import { TableHeader, HeaderItem, TableRow, TableColumn } from './style';

const cryptosTable = ( props ) => {
    let cryptos = props.cryptosData.map( crypto => {
        return (
            <TableRow key={ crypto.id }>
                <TableColumn tinyWidth>{ crypto.cmc_rank }</TableColumn>
                <TableColumn smallWidth>{ crypto.name }</TableColumn>
                <TableColumn smallWidth>{ crypto.symbol }</TableColumn>
                <TableColumn smallWidth colorBlue>{ "$" + Math.round(crypto.quote.USD.price) }</TableColumn>
                <TableColumn largeWidth>{ "$" + Math.round(crypto.quote.USD.market_cap) }</TableColumn>
                <TableColumn largeWidth>{ crypto.circulating_supply }</TableColumn>
                <TableColumn smallWidth>{ crypto.date_added }</TableColumn>
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
