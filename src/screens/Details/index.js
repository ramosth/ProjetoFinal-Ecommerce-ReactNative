import React from 'react';
import {View, ScrollView} from 'react-native';
import HeaderTwo from '../../Components/HeaderTwo/HeaderTwo';
import CardFoto from '../../Components/CardFotoProduto';
import CardDetalhes from '../../Components/CardDetalhes';

const Details = ({route, navigation}) => {
  const {item} = route.params;
  return (
    <ScrollView>
      <View>
        <HeaderTwo nav={() => navigation.goBack()} />
        <CardFoto id={item} />
        <CardDetalhes id={item} navigation={navigation} />
      </View>
    </ScrollView>
  );
};

export default Details;
