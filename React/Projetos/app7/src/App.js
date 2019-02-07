import React from 'react';
import { View } from 'react-native';

import { CenaTopo, CenaResultado, CenaPainel } from './components';


export default props => (
  <View>
    <CenaTopo />
    <CenaResultado />
    <CenaPainel />
  </View>
);
