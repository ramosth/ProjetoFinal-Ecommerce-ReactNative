import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import colors from '../../assets/colors/colors';
import ButtonOrange from '../ButtonOrange';
import Stars from '../Stars';
import styles from './styles';
import {api} from '../../../src/services/Api/api';

const CardDetalhes = ({route, navigation}) => {
  const [coracao, setCoracao] = useState(false);
  const [produto, setProduto] = useState([]);

  const {item} = route.params;

  useEffect(() => {
    const obterProdutoAxios = async () => {
      try {
        const response = await api.get(`/produtos/${item}`);
        setProduto(response.data);
      } catch (error) {
        console.log('Response: ', error);
      }
    };
    obterProdutoAxios();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.linha1}>
          <Text style={styles.nomeProduto}>Nome do produto</Text>
          <TouchableOpacity
            style={styles.favoritar}
            onPress={() => setCoracao(!coracao)}>
            <Icon
              style={
                coracao ? [{color: colors.laranja}] : [{color: colors.branco}]
              }
              name="heart"
              size={20}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.stars}>
          <Stars />
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
