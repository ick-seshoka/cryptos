import React from 'react';

import { TextButton } from './style';

const textButton = ( props ) => <TextButton onClick={ props.click }>{ props.text }</TextButton>;

export default textButton;
