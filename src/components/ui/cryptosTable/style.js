import styled, { css } from 'styled-components';

export const TableHeader = styled.div`
    display: flex;
    flex-basis: 100%;
    border-bottom: 1px solid rgba(151, 151, 151, 0.5);
`

export const HeaderItem = styled.p`
    font-size: 0.9125em;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    color: #424242;
    margin: 0;
    margin-bottom: 0.3em;
    text-transform: capitalize;

    ${
        props => props.tinyWidth && css`
            flex: 1;
        `
    }
    ${
        props => props.smallWidth && css`
            flex: 2;
        `
    }
    ${
        props => props.largeWidth && css`
            flex: 3;
        `
    }
`
export const TableRow = styled.div`
    display: flex;
    flex-basis: 100%;
    margin-top: 0.3em;
    padding: 0.5em;
    border-radius: 3px;
    background-color: #EEEEEE;
`

export const TableColumn = styled.p`
    font-size: 0.9125em;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: #424242;
    margin: 0;
    text-transform: capitalize;

    ${
        props => props.tinyWidth && css`
            flex: 1;
        `
    }
    ${
        props => props.smallWidth && css`
            flex: 2;
        `
    }
    ${
        props => props.largeWidth && css`
            flex: 3;
        `
    }
    ${
        props => props.weightMedium && css`
            font-weight: 500;
        `
    }
    ${
        props => props.colorBlue && css`
            color: #2196F3;
        `
    }

    ${
        props => props.bold && css`
            font-weight: 700;
        `
    }
`