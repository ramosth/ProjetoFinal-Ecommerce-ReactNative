import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Styles from './Styles';

const HeaderTree = ({navProdutos, carrinho}) => {
  return (
    <View style={Styles.topo}>
      <TouchableOpacity onPress={navProdutos}>
        <Icon name="arrow-left" size={15} style={Styles.setaRetorno} />
      </TouchableOpacity>

      <View style={Styles.adress}>
        <Text style={Styles.titulo}>Cart</Text>
        <TouchableOpacity onPress={carrinho}>
          <Icon name="handbag" size={18} style={Styles.bag} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderTree;
