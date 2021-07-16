/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import colors from '../../assets/colors/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.azulSuave,
  },
  logo:{
    width: 150,
    height: 80,
    resizeMode: 'contain',
  },
  titlesWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    alignItems: 'center',
    marginBottom: 30,
    marginHorizontal: 10,
  },
  titlesSubtitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 30,
    color: colors.branco,
    marginLeft: 35,
  },
  inputsWrapper: {
    alignItems: 'center',
  },
  inputItemTitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: colors.branco,
  },
  inputItemWrapper: {
    marginBottom: 20,
  },
  buttonLembrarSenha: {
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
  tituloLembrarSenha: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: colors.cinza,
  },
  buttonStyles: {
    backgroundColor: colors.laranja,
    borderRadius: 50,
    elevation: 5,
    paddingVertical: 8,
    width: 350,
  },
  buttonSigIn: {
    marginTop: 50,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonCreate: {
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonLogin: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
});

