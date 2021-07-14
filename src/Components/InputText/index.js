/* eslint-disable prettier/prettier */
import colors from '../../assets/colors/colors';
import { styles } from './styles';
import React from 'react';
import { View, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function InputText(props) {
  return (
    <View style={[styles.container, props.containerStyle]}>
      <Ionicons name={props.iconName} size={20} color={colors.laranja} />
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        style={styles.textInput}
        placeholderTextColor={colors.cinza}
      />
    </View>
  );
}
