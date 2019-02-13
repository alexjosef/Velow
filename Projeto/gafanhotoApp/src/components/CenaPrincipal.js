import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableHighlitght
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const imgGrupos = require('../imgs/grupos.png');

export default class gafanhotoApp extends Component {
  render() {
    return (
      <View>

        <View>
          <TouchableHighlitght onPress={() => { Actions.resultado(); }}>
            <Image source={imgGrupos} />
          </TouchableHighlitght>
        </View>

      </View>
    );
  }
}
