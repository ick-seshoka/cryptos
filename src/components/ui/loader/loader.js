import React, { Component, Fragment } from 'react';
import { LoaderWrap, LoaderProgress, LoaderText } from './style';

class Loader extends Component {
    render() {
        return (
            <Fragment>
                <LoaderWrap>
                    <LoaderProgress progress="50" />
                </LoaderWrap>
                <LoaderText>Hold on 😉</LoaderText>
            </Fragment>
        )
    }
}

export default Loader;
