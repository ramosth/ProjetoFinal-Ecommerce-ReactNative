/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import colors from '../../assets/colors/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.laranja,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  titulo: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    color: colors.branco,
    paddingHorizontal: 20,
  },
  iconImage: {
    backgroundColor: colors.branco,
    borderRadius: 10,
    paddingVertical: 5,
  },
});
