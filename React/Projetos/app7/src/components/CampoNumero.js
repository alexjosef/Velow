import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default props => (
  <TextInput style={styles.numero} value={props.num} />
);

const styles = StyleSheet.create({
  numero: {
    width: 120,
    height: 60,
    fontSize: 20
  }
});