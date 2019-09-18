import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
const logo = require('../img/jokenpo.png');

export const Logo = () => (
    <View style={estilo.container}>
        {/* O image serve para mostrar uma imagem */}
        <Image source={logo} />
    </View>
)

// Criando um objeto para estilizar o componente 
// individualmente para que o mesmo não precise
// ser estilizado na tela principal
const estilo = StyleSheet.create({
    container:{
        alignItems: 'center',
        backgroundColor: '#00BFFF'

    }
})