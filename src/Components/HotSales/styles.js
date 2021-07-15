/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import colors from '../../assets/colors/colors';
import { windowWidth, windowHeigth } from '../../assets/helpers/dimensions';

export const styles = StyleSheet.create({
  container: {
  },
  titlesWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 17,
    marginTop: 18,
    marginBottom: 15,
  },
  titlesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 25,
    color: colors.azul,
  },
  titlesSubTitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    marginRight: 23,
    color: colors.laranja,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.laranja,
    width: windowWidth / 1.1,
    height: windowHeigth / 3,
    marginLeft: 15,
    marginRight: 21,
    borderRadius: 10,
  },
  cardLeft: {
    backgroundColor: colors.pretoSuave,
    width: '40%',
    height: windowHeigth / 3.5,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.laranja,
    width: 28,
    height: 28,
    marginLeft: 22,
    marginTop: 10,
    borderRadius: 50,
  },
  textCircle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 10,
    color: colors.branco,
    textAlign: 'center',
  },
  textProduto: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 22,
    color: colors.branco,
    marginLeft: 22,
    marginTop: 8,
  },
  textDescricao: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 10,
    color: colors.branco,
    marginLeft: 22,
    marginTop: 3,
  },
  cardRight: {
    flex: 1,
    alignItems: 'flex-end',
    backgroundColor: colors.laranja,
    width: '60%',
    height: windowHeigth / 5.7,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  imagem: {
    width: '100%',
    height: windowHeigth / 3.5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    resizeMode: 'cover',
  },
  buttonBuyNow: {
    width: 100,
    height: 23,
    backgroundColor: colors.branco,
    marginLeft: 22,
    marginTop: 16,
    borderRadius: 5,
  },
  tituloBuyNow: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 11,
    color: colors.azul,
  },
});
