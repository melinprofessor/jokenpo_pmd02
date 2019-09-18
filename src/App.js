import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

import { Logo } from './components/Logo';
import BotaoComponent from './components/BotaoComponent';
import FiguraComponent from './components/FiguraComponent';

const jokenPo = (escolhaUsuario, fim, setFim) => {
  const opcao = ['PEDRA', 'PAPEL', 'TESOURA'];
  const escolhaMaquina = opcao[Math.floor(Math.random() * opcao.length)];

  let resultado = null;

  if (escolhaMaquina === 'PEDRA') {
    if (escolhaUsuario === 'PEDRA') {
      resultado = "EMPATE";
    } else if (escolhaUsuario === 'PAPEL') {
      resultado = "Você Ganhou!";
    } else {
      resultado = "Você Perdeu!"
    }
  }
  if (escolhaMaquina === 'PAPEL') {
    if (escolhaUsuario === 'PEDRA') {
      resultado = "Você Perdeu!";
    } else if (escolhaUsuario === 'PAPEL') {
      resultado = "EMPATOU";
    } else {
      resultado = "Você GANHOU!"
    }
  }
  if (escolhaMaquina === 'TESOURA') {
    if (escolhaUsuario === 'PEDRA') {
      resultado = "Você Ganhou!";
    } else if (escolhaUsuario === 'PAPEL') {
      resultado = "Você Perdeu!";
    } else {
      resultado = "EMPATOU!"
    }
  }

  setFim({
    escolhaMaquina,
    escolhaUsuario,
    resultado
  })
}

const App = () => {
  // Utilizando o hooks (useState) ele serve para set e obter
  // os valores que precisamos escutar ou monitorar

  // Por padrão temos que criar conforme abaixo:
  // fim -> server para obter a informação
  // setFim -> serve para setar as informações no hooks
  const [fim, setFim] = useState({
    escolhaMaquina: '',
    escolhaUsuario: '',
    resultado: ''
  });
  return (
    <View style={estilo.container}>
      {/* Que o logo é um component e foi criado para exibir a imagem */}
      <Logo />
      {/* ScrollView servar para colocar uma barra de rolagem
      quando o conteudo não couber na tela */}
      <ScrollView>
      <View style={estilo.botoes}>
        <BotaoComponent
          titulo="PEDRA" cor="#841584" handleClick={() => { jokenPo("PEDRA", fim, setFim) }} />
        <BotaoComponent
          titulo="TESOURA" cor="#66ff66" handleClick={() => { jokenPo("TESOURA", fim, setFim) }} />
        <BotaoComponent
          titulo="PAPEL" cor="#339966" handleClick={() => { jokenPo("PAPEL", fim, setFim) }} />
      </View>
      <View style={estilo.placar}>
        <Text style={estilo.resultado}>{fim.resultado}</Text>
      </View>
      <View style={estilo.figuras}>
        <View style={estilo.posicao}>
          <Text>Escolha do Usuário</Text>
          <FiguraComponent nome={fim.escolhaUsuario} />
        </View >
        <View style={estilo.posicao}>
          <Text>Escolha Máquina</Text>
          <FiguraComponent nome={fim.escolhaMaquina} />
        </View>

      </View>
      </ScrollView>
    </View>
  );
};
const estilo = StyleSheet.create({
  container: {
    flex: 1
  },
  botoes: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  placar: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  resultado: {
    marginTop: 10,
    marginBottom: 10,
    color: 'red',
    fontSize: 30
  },
  figuras: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  posicao: {
    flexDirection: 'column',
    padding: 10
  }
});
export default App;
