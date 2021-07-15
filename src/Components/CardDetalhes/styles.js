import {StyleSheet} from 'react-native';
import colors from '../../assets/colors/colors';

const styles = StyleSheet.create({
  container: {},
  nomeProduto: {fontSize: 24, fontFamily: 'Montserrat-Bold'},
  favoritar: {
    width: 37,
    height: 37,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: colors.azul,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    padding: 30,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    elevation: 6,
  },
  linha1: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  detalhes: {
    alignItems: 'center',
  },
  cabecalhoDetalhes: {
    color: colors.azul,
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
  },
  textoDetalhes: {
    paddingTop: 1,
    textAlign: 'justify',
    fontFamily: 'Montserrat-Regular',
  },
  texto: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Montserrat-Bold',
  },
  stars: {
    width: '100%',
  },
});

export default styles;
