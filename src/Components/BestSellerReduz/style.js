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
    fontFamily: 'Montserrat-Bold',
    fontSize: 25,
    color: colors.azul,
  },
  seeMore: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: colors.laranja,
  },
  titulos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default style;
