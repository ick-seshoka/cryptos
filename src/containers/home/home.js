import React, { Component, Fragment } from 'react';

import LogoIcon from '../../components/ui/logoIcon';
import Loader from '../../components/ui/loader';
import { ImageWrap, LoadingWrap, Container, LogoText, LoaderStatus } from './style';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <ImageWrap />
                <LoadingWrap>
                    <Container>
                        <LogoIcon large />
                        <LogoText>cryptos</LogoText>
                        <Loader />
                    </Container>
                    <LoaderStatus>We are mining some cryptos</LoaderStatus>
                </LoadingWrap>
            </Fragment>
        )
    }
}

export default Home;
