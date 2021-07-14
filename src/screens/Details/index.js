import React from 'react';
import {View, ScrollView} from 'react-native';
import HeaderTwo from '../../Components/HeaderTwo/HeaderTwo';
import Style from './Style';
import CardFoto from '../../Components/CardFotoProduto';
import CardDetalhes from '../../Components/CardDetalhes';

export const Details = () => {
  return (
    <ScrollView>
      <View>
        <HeaderTwo />
        <CardFoto />
        <CardDetalhes />
      </View>
    </ScrollView>
  );
};
