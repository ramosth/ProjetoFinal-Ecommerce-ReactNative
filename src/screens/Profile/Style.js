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
  nome: {fontSize: 16, fontFamily: 'Montserrat-Regular', marginBottom: 5},

  input: {
    width: 330,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.cinzaChumbo,
    height: 40,
    textAlign: 'center',
  },
  textoNome: {
    marginTop: 30,
  },

  image: {
    alignSelf: 'center',
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 150,
  },
  perfil: {
    width: 150,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 75,
  },
  buttonCheckout: {
    marginTop: '20%',
    width: 330,
    height: 56,
  },
});

export default style;
