import React, { Component } from 'react';
import { View } from 'react-native';

import CenaEntrada from './CenaEntrada';
import CenaOperacao from './CenaOperacao';
import CenaComando from './CenaComando';

class CenaPainel extends Component {
  constructor(props) {
    super(props);

    this.state = { num1: '15', num2: '20', operacao: 'soma' };

    this.calcular = this.calcular.bind(this);
    this.atualizaValor = this.atualizaValor.bind(this);
    this.atualizaOperacao = this.atualizaOperacao.bind(this);
  }

  calcular() {
    const resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
    console.log(resultado);
  }

  atualizaValor(nomeCampo, numero) {
    const obj = {};
    obj[nomeCampo] = numero;

    this.setState(obj);
  }

  atualizaOperacao(operacao) {
    this.setState({ operacao });
  }

  render() {
    return (
      <View>
        <CenaEntrada
          num1={this.state.num1}
          num2={this.state.num2}
          atualizaValor={this.atualizaValor}
        />
        <CenaOperacao atualizaOperacao={this.atualizaOperacao} operacao={this.state.operacao} />
        <CenaComando acao={this.calcular} />
      </View>
    );
  }
}

export { CenaPainel };
