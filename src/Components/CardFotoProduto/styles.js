import {StyleSheet} from 'react-native';
import colors from '../../assets/colors/colors';

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  foto: {width: '90%', height: '90%'},
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 20,
    backgroundColor: '#fff',
    height: 300,
    width: 300,
    borderRadius: 30,
    elevation: 6,
  },
});

export default styles;
