import styled, { css } from 'styled-components';

export const LogoIconImage = styled.img`
${
    props => props.large && css`
        width: 6.25em;
        height: 6.25em;
    `
}

${
    props => props.medium && css`
        width: 4.25em;
        height: 4.25em;
    `
}

${
    props => props.small && css`
        width: 2.25em;
        height: 2.25em;
    `
}

${ 
    props => props.tiny && css`
        width: 1.25em;
        height: 1.25em;
    `
}
`