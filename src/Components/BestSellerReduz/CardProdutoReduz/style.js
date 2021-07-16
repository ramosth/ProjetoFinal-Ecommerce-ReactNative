import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';

const style = StyleSheet.create({
  card: {
    width: 140,
    height: 190,
    borderRadius: 10,
    backgroundColor: '#FFF',
    paddingVertical: 15,
    marginRight: 15,
  },
  containerPreco: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: '3%',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.azul,
  },
  priceRiscado: {
    fontSize: 10,
    textDecorationLine: 'line-through',
    color: '#CCCCCC',
    marginLeft: '5%',
  },
  nomeProduto: {
    marginTop: '3%',
    fontSize: 11,
    color: colors.azul,
  },
  imagem: {
    marginHorizontal: 15,
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  margem: {
    marginHorizontal: '10%',
  },
  favorito: {
    marginTop: 10,
    marginLeft: 105,
    position: 'absolute',
    height: 30,
    width: 30,
    borderRadius: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
  },
  icone: {
    marginTop: '7%',
    color: colors.laranja,
  },
});

export default style;
