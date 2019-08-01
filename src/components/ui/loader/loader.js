import React, { Fragment } from 'react';
import { LoaderWrap, LoaderProgress, LoaderText } from './style';

const Loader = () => (
    <Fragment>
        <LoaderWrap>
            <LoaderProgress />
        </LoaderWrap>
        <LoaderText>Hold on 😉</LoaderText>
    </Fragment>
)

export default Loader;
