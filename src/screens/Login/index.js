/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Image,
  ScrollView,
  Text,
  Alert,
} from 'react-native';
import { styles } from './styles';
import InputText from '../../Components/InputText';
import Button from '../../Components/Button';
import { UsuarioLogado } from '../../contexto/contextUsuario';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // ACESSANDO O CONTEXTO
  const { login } = useContext(UsuarioLogado);

  const chamaLogin = async () => {
    const nomeSalvo = await AsyncStorage.getItem('NomeCadastro');
    const emailSalvo = await AsyncStorage.getItem('EmailCadastro');
    const senhaSalvo = await AsyncStorage.getItem('SenhaCadastro');

    const usuarioCadastrado = {
      id: '1',
      nome: nomeSalvo,
      email: emailSalvo,
      senha: senhaSalvo,
    };

    if (email === emailSalvo && senha === senhaSalvo) {
      login(usuarioCadastrado);
    } else {
      Alert.alert('usuario não cadastrado');
    }
  };

  const setarSenha = async (value) => {
    const dadoSalvo = await AsyncStorage.getItem('LembrarSenha');
    const convertido = JSON.parse(dadoSalvo);
    setEmail(value);
    if (value === convertido.email) {
      setSenha(convertido.senha);
    }
    console.log(dadoSalvo);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Titles */}
        <View style={styles.titlesWrapper}>
          <Text style={styles.titlesSubtitle}>Login</Text>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
          />
        </View>
        {/* Inputs */}
        <View style={styles.inputsWrapper}>
          <View style={styles.inputItemWrapper}>
            <Text style={styles.inputItemTitle}>Email</Text>
            <InputText
              value={email}
              onChangeText={(value) => setarSenha(value)}
              placeholder="Digite o email"
              iconName="mail-outline"
            />
          </View>
          <View style={styles.inputItemWrapper}>
            <Text style={styles.inputItemTitle}>Senha</Text>
            <InputText
              value={senha}
              onChangeText={setSenha}
              placeholder="Digite a senha"
              iconName="ios-lock-closed-outline"
            />
            <Button
              titulo="Lembrar senha"
              buttonStyles={[styles.buttonLembrarSenha]}
              tituloStyles={[styles.tituloLembrarSenha]}
              onPress={() => Alert.alert('lembrar senha')} />
          </View>
        </View>
        {/* Button */}
        <View style={[styles.buttonSigIn]}>
          <Button
            path={require('../../assets/images/google.png')}
            titulo="Entre com o Google"
            buttonStyles={styles.buttonStyles}
            tituloStyles={styles.tituloStyles}
            onPress={() => Alert.alert('Login pelo Gmail')} />
        </View>
        <View style={styles.buttonCreate}>
          <Button
            titulo="Cadastre-se"
            tituloStyles={styles.tituloStyles}
            buttonStyles={[styles.buttonStyles]}
            onPress={() => navigation.navigate('Cadastro')} />
        </View>
        <View style={styles.buttonLogin}>
          <Button
            titulo="Login"
            buttonStyles={styles.buttonStyles}
            tituloStyles={styles.tituloStyles}
            onPress={chamaLogin} />
        </View>
      </ScrollView>
    </View>
  );
}

