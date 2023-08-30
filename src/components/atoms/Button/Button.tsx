import React from 'react';

import styled from './lib/styled';

import { ButtonProps } from './lib/Button';

const {Button} = styled();

const ButtonComponent = (props: ButtonProps) => {
    return <Button>{props.children}</Button>
}

export default ButtonComponent;