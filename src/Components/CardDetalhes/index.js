import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ButtonOrange from '../ButtonOrange';
import styles from './styles';

const CardDetalhes = props => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.linha1}>
          <Text style={styles.nomeProduto}>Nome do produto</Text>
          <TouchableOpacity style={styles.favoritar}>
            <Icon style={{color: '#fff'}} name="heart-outlined" size={20} />
          </TouchableOpacity>
        </View>
        <View style={styles.stars}>
          <Icon name="star-outlined" size={20} />
          <Icon name="star-outlined" size={20} />
          <Icon name="star-outlined" size={20} />
          <Icon name="star-outlined" size={20} />
          <Icon name="star-outlined" size={20} />
        </View>
        <View style={styles.detalhes}>
          <Text style={styles.cabecalhoDetalhes}>Detalhes</Text>
          <Text style={styles.textoDetalhes}>
            É definido como um aparelho eletroacústico que permite a
            transformação, no ponto transmissor, de energia acústica em energia
            elétrica e, no ponto receptor, a energia elétrica é transformada
            novamente em acústica, permitindo desta forma a troca de informações
            (através da fala) entre dois ou mais usuários.
          </Text>
        </View>
        <ButtonOrange texto={'Adicionar no Carrinho'} preco={1500} />
      </View>
    </View>
  );
};
export default CardDetalhes;
