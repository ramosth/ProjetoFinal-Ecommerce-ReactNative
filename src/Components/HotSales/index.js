/* eslint-disable prettier/prettier */
import { styles } from './styles';
import React from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import Button from '../Button';

export default function HotSales(props) {
  return (
    <View style={styles.container}>
      <View style={styles.titlesWrapper}>
        <Text style={styles.titlesTitle}>Hot sales</Text>
        <TouchableOpacity>
          <Text style={styles.titlesSubTitle}>see more</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <View style={styles.cardLeft}>
          <View style={styles.circle}>
            <Text style={styles.textCircle}>New</Text>
          </View>
          <Text style={styles.textProduto}>Iphone 12</Text>
          <Text style={styles.textDescricao}>Súper. Mega. Rápido.</Text>
          <Button
            titulo="Buy Now!"
            buttonStyles={styles.buttonBuyNow}
            tituloStyles={styles.tituloBuyNow}
            onPress={() =>Alert.alert('Buy Now')} />
        </View>
        <View style={styles.cardRight}>
          <Image source={require('../../assets/images/iphone1.png')} style={styles.imagem} />
        </View>
      </View>
    </View>
  );
}
