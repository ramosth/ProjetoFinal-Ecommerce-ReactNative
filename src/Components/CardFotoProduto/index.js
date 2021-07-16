import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import {api} from '../../../src/services/Api/api';

const CardFotoProduto = ({id}) => {
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
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          resizeMode="contain"
          style={styles.foto}
          source={{uri: produto.imagem}}
        />
      </View>
    </View>
  );
};
export default CardFotoProduto;
