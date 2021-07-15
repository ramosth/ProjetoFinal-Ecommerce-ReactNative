import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import CardProduto from './CardProduto';
import style from './style';

<<<<<<< HEAD
const BestSeller = ({nav}) => {
    return (
        <View style={style.container}>
            <View style={style.titulos}>
                <Text style={style.title}>Best Seller</Text>
                <TouchableOpacity>
                    <Text style={style.seeMore}>see more</Text>
                </TouchableOpacity>
            </View>
            <View style={style.row}>
                <CardProduto nav={nav}/>
                <CardProduto nav={nav}/>
            </View>
            <View style={style.row}>
                <CardProduto nav={nav}/>
                <CardProduto nav={nav}/>
            </View>
        </View>
    )
}
=======
const BestSeller = () => {
  return (
    <View style={style.container}>
      <View style={style.titulos}>
        <Text style={style.title}>Best Seller</Text>
        <TouchableOpacity>
          <Text style={style.seeMore}>see more</Text>
        </TouchableOpacity>
      </View>
      <View style={style.row}>
        <CardProduto />
        <CardProduto />
      </View>
      <View style={style.row}>
        <CardProduto />
        <CardProduto />
      </View>
    </View>
  );
};
>>>>>>> ebf5ea14ee0e77a2d5ed5943e8dde8d60f16d402

export default BestSeller;
