import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

const ButtonOrange = props => {
  return (
    <TouchableOpacity style={styles.botao}>
      <Text style={styles.texto}>{props.texto}</Text>
      <Text style={styles.texto}>R${props.preco}</Text>
    </TouchableOpacity>
  );
};

export default ButtonOrange;
