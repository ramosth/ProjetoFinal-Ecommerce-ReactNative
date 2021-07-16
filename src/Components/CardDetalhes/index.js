import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import colors from '../../assets/colors/colors';
import ButtonOrange from '../ButtonOrange';
import Stars from '../Stars';
import styles from './styles';
import {api} from '../../../src/services/Api/api';

const CardDetalhes = ({id}) => {
  const [coracao, setCoracao] = useState(false);
  const [produto, setProduto] = useState([]);

  useEffect(() => {
    const obterProdutoAxios = async () => {
      try {
        const response = await api.get(`/produtos/${id}`);
        setProduto(response.data);
      } catch (error) {
        console.log('Response: ', error);
      }
    };
    obterProdutoAxios();
  }, []);

  const postCarrinho = () => {
    api
      .post('/carrinho', {
        nome: produto.name,
        imagem: produto.imagem,
        preco: produto.preco,
      })
      .then(({data}) => Alert.alert('Adding to Cart'));
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.linha1}>
          <Text style={styles.nomeProduto}>{produto.name}</Text>
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
          <Text style={styles.textoDetalhes}>{produto.descricao}</Text>
        </View>
        <ButtonOrange
          onPress={() => postCarrinho()}
          texto={'Add to Cart'}
          preco={produto.precoDesconto}
        />
      </View>
    </View>
  );
};
export default CardDetalhes;
