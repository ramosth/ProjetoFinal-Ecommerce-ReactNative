/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import colors from '../../assets/colors/colors';
import {windowHeigth} from '../../assets/helpers/dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleWrapper: {
    height: windowHeigth * 0.18,
    paddingHorizontal: 15,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 35,
    color: colors.azul,
    marginLeft: 16,
    marginTop: 20,
    // marginBottom: 10,
  },
  cardItemsWrapper: {
    flex: 1,
    height: windowHeigth * 0.745,
    backgroundColor: colors.azul,
    paddingTop: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  itens: {
    height: windowHeigth * 0.45,
    // flexDirection: 'row',
  },
  itemUnico: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  hr: {
    borderColor: colors.cinza,
    borderBottomWidth: 1,
    marginHorizontal: 5,
  },
  preco: {
    height: windowHeigth * 0.1,
  },
  totalWrapper: {
    marginHorizontal: 40,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 5,
  },
  totalTexto: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: colors.branco,
    marginVertical: 8,
  },
  totalValor: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 15,
    color: colors.branco,
  },
  botao: {
    flex: 1,
    height: windowHeigth * 0.35,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonCheckout: {
    width: 330,
    height: 56,
  },
  imagemWrapper: {
    marginLeft: 20,
    borderRadius: 10,
  },
  imagem: {
    height: 90,
    width: 88,
    borderRadius: 10,
  },
  textoItem: {
    marginLeft: 20,
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
    textAlign: 'center',
  },
  tituloDisable: {
    opacity: 0.3,
  },
  btnQuantidade: {
    backgroundColor: colors.cinzaChumbo,
    height: 88,
    width: 22,
    borderRadius: 26,
    marginRight: 30,
  },
  buttonQuantidade: {
    backgroundColor: 'transparent',
  },
  icone: {
    marginVertical: 25,
  },
});
