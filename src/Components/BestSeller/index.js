import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import CardProduto from './CardProduto';
import style from './style';

<<<<<<< HEAD
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
                <CardProduto nav={navigation}/>
                <CardProduto nav={navigation}/>
            </View>
            <View style={style.row}>
                <CardProduto nav={navigation}/>
                <CardProduto nav={navigation}/>
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
>>>>>>> aa3ae5f2f608d5885856eb088d34aea8a79a6c10

export default BestSeller;
