import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import style from './style';
import Icon from 'react-native-vector-icons/EvilIcons';

const CardProduto = props => {
  return (
    <View>
      <TouchableOpacity
        style={style.card}
        onPress={() => props.navigation.navigate('Details')}>
        <Image
          style={style.imagem}
          source={require('../../../assets/images/Samsung-Galaxy-S20-Ultra-Preto.png')}
        />
        <TouchableOpacity style={style.favorito}>
          <Icon style={style.icone} name="heart" size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={style.margem}>
          <View style={style.containerPreco}>
            <Text style={style.price}>R$1999</Text>
            <Text style={style.priceRiscado}>R$2500</Text>
          </View>
          <Text style={style.nomeProduto}>Samsung Galaxy s20 Ultra</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={style.nomeProduto}>Samsung Galaxy s20 Ultra</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardProduto;
