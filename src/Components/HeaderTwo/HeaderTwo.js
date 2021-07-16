import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Styles from '../HeaderTwo/Styles';

const HeaderTwo = ({goback, carrinho}) => {
  return (
    <View style={Styles.topo}>
      {/* <TouchableOpacity onPress={() => navigation.goBack()}> */}
      <TouchableOpacity onPress={goback}>
        <Icon name="arrow-left" style={Styles.setaRetorno} />
      </TouchableOpacity>

      <Text style={Styles.titulo}>Product Details</Text>

      <TouchableOpacity onPress={carrinho}>
        <Icon name="handbag" style={Styles.bag} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderTwo;
