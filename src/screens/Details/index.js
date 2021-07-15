import React from 'react';
import {View, ScrollView} from 'react-native';
import HeaderTwo from '../../Components/HeaderTwo/HeaderTwo';
import CardFoto from '../../Components/CardFotoProduto';
import CardDetalhes from '../../Components/CardDetalhes';

const Details = props => {
  return (
    <ScrollView>
      <View>
        <HeaderTwo nav={() => props.navigation.navigate('Home')} />
        <CardFoto />
        <CardDetalhes />
      </View>
    </ScrollView>
  );
};

export default Details;
