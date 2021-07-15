/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { styles } from './styles';
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

export default function Button(props) {
  return (
    <TouchableOpacity
      style={[styles.container, props.buttonStyles, { flexDirection: 'row' }]}
      onPress={props.onPress}
      disabled={props.disabled}>
      <Image
        source={props.path}
        style={styles.iconImage}
      />
      <Text style={[styles.titulo, props.tituloStyles]}>{props.titulo}</Text>
    </TouchableOpacity>
  );
}
