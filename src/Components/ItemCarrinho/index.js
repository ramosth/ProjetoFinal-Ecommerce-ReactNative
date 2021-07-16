/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import colors from '../../assets/colors/colors';
import {styles} from './styles';
import {View, Image, Text, Alert} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../Button';

export default function InputText(props) {
  const [contador, setContador] = useState(1);
  const incremento = () => setContador(contador => contador + 1);
  const decremento = () => setContador(contador => contador - 1);
  return (
    <View style={styles.itemUnico}>
      <View style={styles.imagemWrapper}>
        <Image source={props.image} style={styles.imagem} />
      </View>
      <View style={styles.textoItem}>
        <Text style={styles.textoItemTitulo}>{props.nome}</Text>
        <Text style={styles.textoItemPreco}>{props.preco}</Text>
      </View>
      <View style={styles.btnQuantidade}>
        <Button
          titulo="-"
          buttonStyles={styles.buttonQuantidade}
          tituloStyles={styles.tituloQuantidade}
          onPress={decremento}
        />
        <Text style={styles.textoQuantidade}>{contador}</Text>
        <Button
          titulo="+"
          buttonStyles={styles.buttonQuantidade}
          tituloStyles={styles.tituloQuantidade}
          onPress={incremento}
        />
      </View>
      <Ionicons
        name="md-trash-outline"
        size={28}
        color={colors.cinzaChumbo}
        style={styles.icone}
        onPress={() => Alert.alert('excluir item')}
      />
    </View>
  );
}