import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import { formatDateTime } from '../../helpers';

import Header from '../../components/ui/header';
import Footer from '../../components/ui/footer';
import CryptosTable from '../../components/ui/cryptosTable';
import Spinner from '../../components/ui/spninner';
import Error from '../../components/ui/error';
import { Container, CryptoCount, RefreshStatus } from './style';

class Cryptos extends Component {
    componentDidMount () {
        this.props.getCryptos();

        this.waitTimeUpdateTimer = setInterval( () => {
            this.props.getCryptos();
        }, 2000)
    }

    componentWillUnmount() {
        clearInterval(this.waitTimeUpdateTimer)
    }

    render() {
        let content = (
            <Container spinner>
                <Spinner />
            </Container>
        );

        if ( !this.props.fetchingCryptos && this.props.status.error == 0 ) {
            content = (
                <Fragment>
                    <Container>
                        <CryptoCount>{ this.props.cryptos.length } Cryptos were found in the mine 😁 </CryptoCount>
                        <RefreshStatus>{ "last refrashed: " + formatDateTime(this.props.refreshDate) }</RefreshStatus>
                    </Container>
                    <Container table>
                        <CryptosTable cryptosData={ this.props.cryptos } />
                    </Container>
                </Fragment>
            );

        } else {
            content = (
                <Container error>
                    <Error message={ this.props.status.error_message } />
                </Container>
            );
        }

        return (
            <Fragment>
                <Header />
                { content }
                <Footer />
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        status: state.status,
        cryptos: state.data,
        fetchingCryptos: state.fetchingCryptos,
        refreshDate: state.refreshDate,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCryptos: () => dispatch(actions.getCryptos()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cryptos);
