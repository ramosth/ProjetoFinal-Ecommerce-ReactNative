/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Image, Text, TouchableOpacity, FlatList} from 'react-native';
import style from './style';
import Icon from 'react-native-vector-icons/EvilIcons';
import {api} from '../../../services/Api/api';

const CardProduto = ({navigation}) => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const obterProdutoAxios = async () => {
      try {
        const response = await api.get('/produtos');
        if (response.data.lenght < 5) {
          setProdutos(response.data);
        } else {
          setProdutos(response.data.slice(0, 4));
        }
      } catch (error) {
        console.log('Response: ', error);
      }
    };
    obterProdutoAxios();
  }, []);

  const renderPopularItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', {item: item.id})}>
        <View style={style.card}>
          <Image style={style.imagem} source={{uri: item.imagem}} />
          <TouchableOpacity style={style.favorito}>
            <Icon style={style.icone} name="heart" size={20} />
          </TouchableOpacity>
          <TouchableOpacity style={style.margem}>
            <View style={style.containerPreco}>
              <Text style={style.price}>R${item.preco}</Text>
              <Text style={style.priceRiscado}>R${item.priceSale}</Text>
            </View>
            <Text style={style.nomeProduto}>{item.name}</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={produtos}
        renderItem={renderPopularItem}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CardProduto;
