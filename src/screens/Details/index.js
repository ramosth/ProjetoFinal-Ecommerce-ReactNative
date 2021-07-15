import React from 'react';
import {View, ScrollView} from 'react-native';
import HeaderTwo from '../../Components/HeaderTwo/HeaderTwo';
import CardFoto from '../../Components/CardFotoProduto';
import CardDetalhes from '../../Components/CardDetalhes';

<<<<<<< HEAD
const Details = () => {
=======
const Details = ({navigation}) => {
>>>>>>> ebf5ea14ee0e77a2d5ed5943e8dde8d60f16d402
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

<<<<<<< HEAD
export default Details;
=======
export default Details;
>>>>>>> ebf5ea14ee0e77a2d5ed5943e8dde8d60f16d402
