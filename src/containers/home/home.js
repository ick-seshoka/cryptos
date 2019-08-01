import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import LogoIcon from '../../components/ui/logoIcon';
import Loader from '../../components/ui/loader';
import TextButton from '../../components/ui/buttons/textButton';
import { ImageWrap, LoadingWrap, Container, LogoText, LoaderStatus } from './style';

class Home extends Component {
    state = {
        showLoader: false,
    }

    handleNavToCryptos = () => {
        this.setState({
            showLoader: true,
        });

        setTimeout(() => {
            this.props.history.push('/cryptos');
        }, 3000);
    }

    render() {
        let loadCryptos = <TextButton text="Show me cryptos 💰" click={ this.handleNavToCryptos } />;

        if ( this.state.showLoader ) {
            loadCryptos = <Loader />;
        }

        return (
            <Fragment>
                <ImageWrap />
                <LoadingWrap>
                    <Container>
                        <LogoIcon large />
                        <LogoText>cryptos</LogoText>
                        { loadCryptos }
                    </Container>
                    <LoaderStatus>We are mining some cryptos</LoaderStatus>
                </LoadingWrap>
            </Fragment>
        )
    }
}

export default withRouter(Home);
