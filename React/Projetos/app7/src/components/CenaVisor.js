import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default props => (
  <View>
    <TextInput
      style={styles.txtInput}
      placeholder='Resultado'
      Editable={false}
    />
  </View>
);

const styles = StyleSheet.create({
  txtInput: {
    height: 100,
    fontSize: 30
  }
});
