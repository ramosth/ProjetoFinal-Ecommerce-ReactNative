/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import colors from '../../assets/colors/colors';
import color from '../../assets/colors/colors';

const Styles = StyleSheet.create({
  barraTopo: {
    top: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  tituloLocal: {
    color: color.azul,
    fontSize: 15,
    fontFamily: 'Montserrat-Medium',
  },
  topo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '25%',
  },
  location: {
    color: color.laranja,
  },
  seta: {
    color: color.cinzaClaro,
  },
  filter: {
    color: color.azul,
    // fontSize: 15,
    fontFamily: 'Montserrat-Medium',
  },
  filterNome: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  bag: {
    backgroundColor: color.laranja,
    color: color.branco,
    borderRadius: 10,
    padding: 15,
  },
});

export default Styles;
