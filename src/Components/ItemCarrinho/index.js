/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import colors from '../../assets/colors/colors';
import {styles} from './styles';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {api} from '../../services/Api/api';

export default function ItemCarrinho(props) {
  const [contador, setContador] = useState(1);
  const incremento = () => setContador(contador => contador + 1);
  const decremento = () => setContador(contador => contador - 1);

  const deletarProduto = async () => {
    try {
      await api.delete(`/carrinho/${props.id}`);
    } catch (error) {
      console.log('Response: ', error);
    }
  };

  return (
    <View style={styles.itemUnico}>
      <View style={styles.imagemWrapper}>
        <Image
          resizeMode="contain"
          source={{uri: props.imagem}}
          style={styles.imagem}
        />
      </View>
      <View style={styles.textoItem}>
        <Text style={styles.textoItemTitulo}>{props.nome}</Text>
        <Text style={styles.textoItemPreco}>{props.preco}</Text>
      </View>
      <View style={styles.btnQuantidade}>
        <TouchableOpacity style={styles.buttonQuantidade} onPress={decremento}>
          <Text style={styles.tituloQuantidade}>-</Text>
        </TouchableOpacity>
        <Text style={styles.textoQuantidade}>{contador}</Text>
        <TouchableOpacity style={styles.buttonQuantidade} onPress={incremento}>
          <Text style={styles.tituloQuantidade}>+</Text>
        </TouchableOpacity>
      </View>
      <Ionicons
        name="md-trash-outline"
        size={28}
        color={colors.cinzaChumbo}
        style={styles.icone}
        onPress={() => deletarProduto()}
      />
    </View>
  );
}
