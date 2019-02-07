import React, { Component } from 'react';
import { Picker, StyleSheet } from 'react-native';

export default class CenaOperacao extends Component {
  constructor(props) {
    super(props);

    this.state = { operacao: '' };
  }
  render() {
    return (
      <Picker
        style={styles.operacao}
        selectedValue={this.state.operacao}
        onValueChange={op => { this.setState({ operacao: op }); }}
      >

        <Picker.Item label='Somar' value='soma' />
        <Picker.Item label='Subtrair' value='subtrair' />
      </Picker>
    );
  }
}

const styles = StyleSheet.create({
  operacao: {
    marginTop: 15,
    marginBottom: 15
  }
});
