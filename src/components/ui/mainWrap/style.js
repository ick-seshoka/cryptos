import styled, { css } from 'styled-components';

export const Main = styled.main`
    display: flex;
    height: 100%;
    overflow: hidden;
    ${
        props => props.column && css`
            flex-direction: column;
            height: auto;
        `
    }
`