import styled, { css } from 'styled-components';

export const Container = styled.div`
    height: 100px;
    ${
        props => props.table && css`
            border: 1px solid rgba(151, 151, 151, 0.5);
            border-radius: 3px;
            margin-left: 5em;
            margin-right: 5em;
            padding: 1em;
            height: 465px;
            position: relative;
            overflow-y: scroll;
        `
    }

    ${
        props => props.spinner && css`
            height: 585px;
            line-height: 585px;
            text-align: center;
        `
    }
`

export const CryptoCount = styled.p`
    text-align: right;
    margin-bottom: 0.5em;
    margin-right: 3em;
    font-size: 1.3625em;
    color: #424242;
    font-weight: 700;
`

export const RefreshStatus = styled.p`
    text-align: right;
    margin-right: 5em;
    font-size: 1.025em;
    font-weight: 300;
    color: #BDBDBD;
`