/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import { styles } from './styles';
import HeaderTree from '../../Components/HeaderTree/HeaderTree';
import Button from '../../Components/Button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/colors/colors';

export default function Card(props) {
  const [contador, setContador] = useState(1);
  const incremento = () => setContador(contador => contador + 1)
  const decremento = () => setContador(contador=> contador - 1)

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <HeaderTree navProdutos={() => props.navigation.navigate('Produtos')}/>
        <Text style={styles.title}>My Cart</Text>
      </View>
      <View style={styles.cardItemsWrapper}>
        {/* Itens */}
        <View style={styles.itens}>
          <ScrollView>
            <View style={styles.itemUnico}>
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
                  onPress={decremento}
                  disabled={contador === 0 ? true : false}
                  tituloStyles={contador <= 0 ? styles.tituloDisable : {color: colors.branco}} />
                <Text style={styles.textoQuantidade}>{contador}</Text>
                <Button
                  titulo="+"
                  buttonStyles={styles.buttonQuantidade}
                  tituloStyles={styles.tituloQuantidade}
                  onPress={incremento} />
              </View>
              <Ionicons name="md-trash-outline" size={28} color={colors.cinzaChumbo} style={styles.icone} onPress={() => Alert.alert('excluir item')} />
            </View>

            <View style={styles.itemUnico}>
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
                  onPress={decremento} />
                <Text style={styles.textoQuantidade}>2</Text>
                <Button
                  titulo="+"
                  buttonStyles={styles.buttonQuantidade}
                  tituloStyles={styles.tituloQuantidade}
                  onPress={incremento} />
              </View>
              <Ionicons name="md-trash-outline" size={28} color={colors.cinzaChumbo} style={styles.icone} onPress={() => Alert.alert('excluir item')} />
            </View>

            <View style={styles.itemUnico}>
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
                  onPress={decremento} />
                <Text style={styles.textoQuantidade}>2</Text>
                <Button
                  titulo="+"
                  buttonStyles={styles.buttonQuantidade}
                  tituloStyles={styles.tituloQuantidade}
                  onPress={incremento} />
              </View>
              <Ionicons name="md-trash-outline" size={28} color={colors.cinzaChumbo} style={styles.icone} onPress={() => Alert.alert('excluir item')} />
            </View>

            <View style={styles.itemUnico}>
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
                  onPress={decremento} />
                <Text style={styles.textoQuantidade}>2</Text>
                <Button
                  titulo="+"
                  buttonStyles={styles.buttonQuantidade}
                  tituloStyles={styles.tituloQuantidade}
                  onPress={incremento} />
              </View>
              <Ionicons name="md-trash-outline" size={28} color={colors.cinzaChumbo} style={styles.icone} onPress={() => Alert.alert('excluir item')} />
            </View>
          </ScrollView>
        </View>
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
