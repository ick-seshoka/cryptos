import React from 'react';

import { Link } from './style';
import Icon from '../icon/';

const linkIcon = ( props ) => (
    <Link href="#">
        <Icon iconName={ props.iconName } />
    </Link>
);

export default linkIcon;
