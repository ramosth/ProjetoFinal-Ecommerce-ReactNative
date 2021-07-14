/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import colors from '../../assets/colors/colors';
import { windowHeigth } from '../../assets/helpers/dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleWrapper: {
    height: windowHeigth * 0.25,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 35,
    color: colors.azul,
    marginLeft: 16,
    marginTop: 50,
    marginBottom: 20,
  },
  cardItemsWrapper: {
    flex: 1,
    height: windowHeigth * 0.8,
    backgroundColor: colors.azul,
    marginTop: -20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 60,
  },
  itens: {
    height: windowHeigth * 0.5,
    flexDirection: 'row',
  },
  hr: {
    borderColor: colors.cinza,
    borderBottomWidth: 1,
    marginHorizontal: 5,
  },
  preco: {
    height: windowHeigth * 0.10,
  },
  totalWrapper: {
    marginLeft: 55,
    marginRight: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalTexto: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: colors.branco,
    marginTop: 13,
  },
  totalValor: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 15,
    color: colors.branco,
    marginTop: 13,
  },
  botao: {
    flex: 1,
    height: windowHeigth * 0.35,
    alignItems: 'center',
    marginTop: 27,
  },
  buttonCheckout: {
    width: 330,
    height: 56,
  },
  imagemWrapper: {
    marginLeft: 33,
    borderRadius: 10,
  },
  imagem: {
    height: 88,
    width: 88,
    borderRadius: 10,
  },
  textoItem: {
    marginLeft: 30,
  },
  textoItemTitulo: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 15,
    color: colors.branco,
    width: 153,
    marginBottom: 5,
  },
  textoItemPreco: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 15,
    color: colors.laranja,
  },
  textoQuantidade: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 15,
    color: colors.branco,
    textAlign: 'center',
  },
  tituloQuantidade: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 25,
    color: colors.branco,
  },
  btnQuantidade: {
    backgroundColor: colors.cinzaChumbo,
    height: 88,
    width: 22,
    borderRadius: 26,
    marginRight: 25,
  },
  buttonQuantidade: {
    backgroundColor: 'transparent',
  },
  icone: {
    marginVertical: 25,
  },
});
