/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import colors from '../../assets/colors/colors';

export const styles = StyleSheet.create({
  container: {
    // paddingVertical: 15,
    backgroundColor: colors.laranja,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  titulo: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    color: colors.branco,
  },
});
