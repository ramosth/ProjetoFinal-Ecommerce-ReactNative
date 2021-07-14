/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  // ScrollView,
  Alert,
  Image,
} from 'react-native';
import { styles } from './styles';
import HeaderTree from '../../Components/HeaderTree/HeaderTree';
import Button from '../../Components/Button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/colors/colors';

export default function Card() {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <HeaderTree />
        <Text style={styles.title}>My Cart</Text>
      </View>
      <View style={styles.cardItemsWrapper}>
        {/* Itens */}
        {/* <ScrollView> */}
        <View style={styles.itens}>
          <View style={styles.imagemWrapper}>
            <Image source={require('../../assets/images/Samsung-Galaxy-S20-Ultra-1.png')} style={styles.imagem} />
          </View>
          <View style={styles.textoItem}>
            <Text style={styles.textoItemTitulo}>Galaxy Note 20 Ultra</Text>
            <Text style={styles.textoItemPreco}>$3000.00</Text>
          </View>
          <View style={styles.btnQuantidade}>
            <Button
              titulo="-"
              buttonStyles={styles.buttonQuantidade}
              tituloStyles={styles.tituloQuantidade}
              onPress={() => Alert.alert('diminui')} />
            <Text style={styles.textoQuantidade}>2</Text>
            <Button
              titulo="+"
              buttonStyles={styles.buttonQuantidade}
              tituloStyles={styles.tituloQuantidade}
              onPress={() => Alert.alert('aumenta')} />
          </View>
          <Ionicons name="md-trash-outline" size={28} color={colors.cinzaChumbo} style={styles.icone} onPress={() => Alert.alert('excluir item')}/>
        </View>
        {/* </ScrollView> */}
        <View style={styles.hr} />
        {/* Total */}
        <View style={styles.preco}>
          <View style={styles.totalWrapper}>
            <Text style={styles.totalTexto}>Total</Text>
            <Text style={styles.totalValor}>$6,000 us</Text>
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
            onPress={() => Alert.alert('Checkout')} />
        </View>
      </View>
    </View>
  );
}
