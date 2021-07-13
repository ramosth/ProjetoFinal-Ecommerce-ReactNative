/* eslint-disable prettier/prettier */
import colors from '../assets/colors/colors';
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
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

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    borderColor: 'transparent',
    borderWidth: 1,
    paddingHorizontal: 24,
    backgroundColor: colors.branco,
    width: 300,
    marginLeft: 32,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: colors.preto,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    marginVertical: 5,
  },
  textInput: {
    width: 70,
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    marginLeft: 10,
    marginRight: 10,
  },
});
