/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Styles from './Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const Header = ({navigation}) => {
  const [nome, setNome] = useState('');
  useEffect(() => {
    const recuperarNome = async () => {
      const nomeSalvo = await AsyncStorage.getItem('NomeCadastro');
      if (nomeSalvo) {
        setNome(nomeSalvo);
        console.log('nome', nomeSalvo);
      }
    };

    recuperarNome();
  }, []);

  return (
    <View style={Styles.barraTopo}>
      <TouchableOpacity>
        <Text style={Styles.filter}>
          Olá, <Text style={Styles.filterNome}>{nome}</Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Card')}>
        <Icon name="handbag" style={Styles.bag} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
