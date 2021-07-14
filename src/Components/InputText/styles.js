import {StyleSheet} from 'react-native';
import colors from '../../assets/colors/colors';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    paddingHorizontal: 24,
    backgroundColor: colors.branco,
    width: 250,
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
    elevation: 2,
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
