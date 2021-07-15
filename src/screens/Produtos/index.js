/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { styles } from './styles';
import BestSeller from '../../Components/BestSeller';
import RotaLogin from '../../navigation/RotaLogin';
import HeaderTree from '../../Components/HeaderTree/HeaderTree';

const Produtos = ({ navigation}) => {
  return (
  <View>
    <HeaderTree navProdutos={() => navigation.goBack()}/>
    <Text style={styles.texto}>Products</Text>
    <BestSeller navigation={navigation}/>
    <RotaLogin/>
  </View>
  );
}

export default Produtos;