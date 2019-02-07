import React, { Component } from 'react';
import { View } from 'react-native';

import CenaEntrada from './CenaEntrada';
import CenaOperacao from './CenaOperacao';
import CenaComando from './CenaComando';

class CenaPainel extends Component {
  constructor(props) {
    super(props);

    this.state = { num1: '', num2: '' };
  }
  render() {
    return (
      <View>
        <CenaEntrada num1={this.state.num1} num2={this.state.num2} />
        <CenaOperacao />
        <CenaComando />
      </View>
    );
  }
}

export { CenaPainel };
