/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import CardProduto from './CardProduto';
import style from './style';

const BestSeller = ({navigation}) => {
  return (
    <View style={style.container}>
      <View style={style.titulos}>
        <Text style={style.title}>Best Seller</Text>
        <TouchableOpacity>
          <Text style={style.seeMore}>see more</Text>
        </TouchableOpacity>
      </View>
      <View style={style.row}>
        <CardProduto navigation={navigation} />
      </View>
    </View>
  );
};

export default BestSeller;
