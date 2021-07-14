import {StyleSheet} from 'react-native';
import colors from '../../assets/colors/colors';

export const styles = StyleSheet.create({
  titlesWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 17,
    marginTop: 18,
    marginBottom: 24,
  },
  titlesTitleCategoria: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 25,
    color: colors.azul,
  },
  titlesTitleAll: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    marginRight: 33,
    color: colors.laranja,
  },
  categoryItemWrapper: {
    padding: 3,
    marginBottom: 7,
    marginRight: 20,
  },
  categoryItemIconWrapper: {
    backgroundColor: colors.branco,
    width: 71,
    height: 71,
    borderRadius: 71,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.preto,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },

  categoryItemTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 12,
    textAlign: 'center',
    color: colors.azul,
    marginTop: 8,
  },
});
