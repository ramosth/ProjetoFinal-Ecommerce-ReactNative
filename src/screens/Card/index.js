/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Text, Alert, FlatList} from 'react-native';
import {styles} from './styles';
import HeaderTree from '../../Components/HeaderTree/HeaderTree';
import Button from '../../Components/Button';
import ItemCarrinho from '../../Components/ItemCarrinho';
import {api} from '../../../src/services/Api/api';

export default function Card(props) {
  const [precoTotal, setPrecoTotal] = useState(0);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const obterProdutoAxios = async () => {
      try {
        const response = await api.get('/carrinho');
        setProdutos(response.data);
        response.data.map(item =>
          setPrecoTotal(valor => valor + parseFloat(item.preco)),
        );
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
            <Text style={styles.totalValor}>{precoTotal.toFixed(2)}</Text>
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
