/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {styles} from './styles';
import BestSeller from '../../Components/BestSeller';
import HeaderTree from '../../Components/HeaderTree/HeaderTree';

const Produtos = ({navigation}) => {
  return (
    <View>
      <HeaderTree
        navProdutos={() => navigation.goBack()}
        carrinho={() => navigation.navigate('Card')}
      />
      <Text style={styles.texto}>Products</Text>
      <BestSeller navigation={navigation} />
    </View>
  );
};

export default Produtos;
