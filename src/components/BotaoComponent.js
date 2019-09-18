import React from 'react';
import {Button} from 'react-native';

const BotaoComponent = props => (
    <Button
    title={props.titulo}
    color={props.cor}
    onPress={props.handleClick}
    />
)
export default BotaoComponent;