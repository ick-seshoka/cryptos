import styled from 'styled-components';
import mineLandscape from '../../assets/images/mine-landscape.jpg';

export const ImageWrap = styled.div`
    flex: 1;
    background-image: url(${ mineLandscape });
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 50%;
`

export const LoadingWrap = styled.div`
    flex: 1;
    background: #6078EA;
    background-image: linear-gradient(-213deg, rgba(23, 234, 217, 1) 0%, rgba(96, 120, 234, 1) 100%);
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50%;
    transform: translateY(-50%);
`

export const LogoText = styled.h1`
    color: #fff;
    margin: 0;
    margin-top: 0.5em;
    font-size: 2.125em;
    font-weight: 700;
    text-transform: capitalize;
`

export const LoaderStatus = styled.p`
    text-align: center;
    font-size: 0.9375em;
    font-weight: 400;
    color: #FFF;
`