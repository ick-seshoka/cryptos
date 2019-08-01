import React, { Fragment } from 'react';

import { LanguageShort, CaretIcon } from './style';

const language = () => (
    <Fragment>
        <LanguageShort>EN</LanguageShort>
        <CaretIcon className="fa fa-caret-down" aria-hidden="true" />
    </Fragment>
)

export default language;
