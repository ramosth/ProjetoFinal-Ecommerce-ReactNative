/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Alert, Image, FlatList} from 'react-native';
import {styles} from './styles';
import HeaderTree from '../../Components/HeaderTree/HeaderTree';
import Button from '../../Components/Button';
import ItemCarrinho from '../../Components/ItemCarrinho';
import {api} from '../../../src/services/Api/api';

export default function Card(props) {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const obterProdutoAxios = async () => {
      try {
        const response = await api.get('/carrinho');
        setProdutos(response.data);
      } catch (error) {
        console.log('Response: ', error);
      }
    };
    obterProdutoAxios();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <HeaderTree navProdutos={() => props.navigation.navigate('Produtos')} />
        <Text style={styles.title}>My Cart</Text>
      </View>
      <View style={styles.cardItemsWrapper}>
        <View style={styles.itens}>
          <View>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={produtos}
              renderItem={({item}) => {
                return (
                  <ItemCarrinho
                    imagem={item.imagem}
                    nome={item.nome}
                    preco={item.preco}
                    id={item.id}
                  />
                );
              }}
            />
          </View>
        </View>
        <View style={styles.hr} />
        {/* Total */}
        <View style={styles.preco}>
          <View style={styles.totalWrapper}>
            <Text style={styles.totalTexto}>Total</Text>
            <Text style={styles.totalValor}>R$6.000</Text>
          </View>
          <View style={styles.totalWrapper}>
            <Text style={styles.totalTexto}>Delivery</Text>
            <Text style={styles.totalValor}>Free</Text>
          </View>
        </View>
        <View style={styles.hr} />
        {/* Botao */}
        <View style={styles.botao}>
          <Button
            titulo="Checkout"
            buttonStyles={styles.buttonCheckout}
            tituloStyles={styles.tituloCheckout}
            onPress={() => Alert.alert('Checkout')}
          />
        </View>
      </View>
    </View>
  );
}
