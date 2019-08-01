import React from 'react';

import { LogoIconImage } from "./style";

import LogoSymbol from '../../../assets/images/logo-symbol.svg';

const LogoIcon = ( props ) => <LogoIconImage src={ LogoSymbol } { ...props } alt="logo icon" />

export default LogoIcon;
