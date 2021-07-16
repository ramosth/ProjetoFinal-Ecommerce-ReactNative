/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import CardProdutoReduz from './CardProdutoReduz';
import style from './style';

const BestSellerReduz = ({navigation}) => {
  return (
    <View style={style.container}>
      <View style={style.titulos}>
        <Text style={style.title}>Best Seller</Text>
        <TouchableOpacity>
          <Text style={style.seeMore}>see more</Text>
        </TouchableOpacity>
      </View>
      <View style={style.row}>
        <CardProdutoReduz navigation={navigation} />
      </View>
    </View>
  );
};

export default BestSellerReduz;
