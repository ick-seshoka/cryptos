import React, { Component } from 'react';

import { LogoIconImage } from "./style";

import LogoSymbol from '../../../assets/images/logo-symbol.svg';

class LogoIcon extends Component {
    render() {
        return(
            <LogoIconImage src={ LogoSymbol } large alt="logo icon" />
        )
    }
}

export default LogoIcon;
