import styled from 'styled-components';

export const LoaderWrap = styled.div`
    margin-top: 4em;
    width: 10em;
    height: 0.6em;
    border-radius: 2.5em;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 0.1em;
    overflow: hidden; 
`

export const LoaderProgress = styled.div`
    width: 10%;
    height: 0.5em;
    border-radius: 1.5em;
    background-color: #FA6400;
    animation-name: stretch;
    animation-duration: 3s;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;

    @keyframes stretch {
        10% { width: 10% }
        50% { width: 50% }
        100% { width: 100% }
    }
`

export const LoaderText = styled.p`
    font-size: 0.9375em;
    font-weight: 400;
    color: #FFF;
`