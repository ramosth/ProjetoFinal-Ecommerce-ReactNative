import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import styles from './styles';

const CardFotoProduto = props => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.foto}
          source={require('../../assets/images/celularDetalhe.png')}
        />
      </View>
    </View>
  );
};
export default CardFotoProduto;
