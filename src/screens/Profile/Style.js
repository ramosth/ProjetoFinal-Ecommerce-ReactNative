import {StyleSheet} from 'react-native';
import colors from '../../assets/colors/colors';

const style = StyleSheet.create({
  fundo: {
    justifyContent: 'space-evenly',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: 250,
    backgroundColor: colors.cinzaChumbo,
  },
  meuPerfil: {fontSize: 16, color: 'white', fontFamily: 'Montserrat-Bold'},
  nome: {fontSize: 22, fontFamily: 'Montserrat-Regular'},

  image: {
    alignSelf: 'center',
    width: 140,
    height: 140,
    resizeMode: 'contain',
    borderRadius: 75,
  },
  perfil: {
    width: 150,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 75,
  },
  buttonCheckout: {
    marginTop: 300,
    width: 330,
    height: 56,
  },
});

export default style;
