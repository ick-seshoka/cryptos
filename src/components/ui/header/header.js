import React from 'react';

import { Header, LogoText, Container } from './style';
import LogoIcon from '../logoIcon';
import LinkIcon from '../icons/linkIcon';
import Language from '../language';

const header = () => (
    <Header>
        <Container>
            <LogoIcon small />
            <LogoText>cryptos</LogoText>
        </Container>
        <Container>
            <LinkIcon iconName="search" />
            <LinkIcon iconName="bell" />
            <LinkIcon iconName="cog" />
            <Language />
        </Container>
    </Header>
);

export default header;
