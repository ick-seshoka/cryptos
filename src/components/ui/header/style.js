import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
`

export const Header = styled.header`
    display: flex;
    flex-basis: 100%;
    padding-bottom: 1em;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5em;
    margin-left: 0.8em;
    margin-right: 0.8em;
    border-bottom: 1px solid rgba(151, 151, 151, 0.5);
`

export const LogoText = styled.h1`
    margin: 0;
    margin-left: 0.5em;
    color: #424242;
    font-size: 1.7875em;
    font-weight: 700;
    text-transform: capitalize;
`