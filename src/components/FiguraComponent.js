import React from 'react';
import {Image} from 'react-native';

const papel = require('../img/papel.png');
const tesoura = require('../img/tesoura.png');
const pedra = require('../img/pedra.png');

// Podemos passar informações utilizando o props
// e com ele podemos definir/compartilhar entre componentes
const FiguraComponent = (props) => {
    if(props.nome ==='PAPEL') {
        return (
            <Image source={papel}/>
        )
    } else if (props.nome === 'TESOURA') {
        return(
            <Image source={tesoura}/>
        )
    } else if (props.nome === 'PEDRA') {
        return (
            <Image  source={pedra}/>
        )
    } else {
        return (
            <></>
        )
    }
}

export default FiguraComponent;
