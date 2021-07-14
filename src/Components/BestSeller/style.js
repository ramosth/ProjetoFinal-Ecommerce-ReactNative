import {StyleSheet} from 'react-native';
import colors from '../../assets/colors/colors';

const style = StyleSheet.create({
  container: {
    marginHorizontal: '5%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '5%',
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    color: colors.azul,
  },
  seeMore: {
    color: colors.laranja,
    fontSize: 15,
  },
  titulos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '5%',
    alignItems: 'baseline',
  },
});

export default style;
