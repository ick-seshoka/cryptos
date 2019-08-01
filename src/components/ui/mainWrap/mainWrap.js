import React from 'react';

import { Main } from "./style";

const mainWrap = ( props ) => (
    <Main { ...props }>
        { props.children }
    </Main>
)

export default mainWrap;