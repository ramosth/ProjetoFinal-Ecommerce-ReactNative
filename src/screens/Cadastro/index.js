/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Image, ScrollView, Text, Alert} from 'react-native';
// eslint-disable-next-line prettier/prettier
import {styles} from './styles';
import InputText from '../../Components/InputText';
import Button from '../../Components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cadastro({navigation}) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [imagem, setImagem] = useState('');

  const chamaLogin = () => {
    Alert.alert('Cadastro Efetuado', 'Usuário registrado com sucesso!');
    navigation.navigate('Login');
  };

  const cadastrarUsuario = () => {
    AsyncStorage.setItem('NomeCadastro', nome);
    AsyncStorage.setItem('EmailCadastro', email);
    AsyncStorage.setItem('SenhaCadastro', senha);
    AsyncStorage.setItem('ImagemCadastro', imagem);
    chamaLogin();
  };

  const lembrarSenha = () => {
    AsyncStorage.setItem('LembrarSenha', JSON.stringify({ email: email, senha: senha }));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Titles */}
        <View style={styles.titlesWrapper}>
          <Text style={styles.titlesSubtitle}>Cadastro</Text>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
          />
        </View>
        {/* Inputs */}
        <View style={styles.inputsWrapper}>
          <View style={styles.inputItemWrapper}>
            <Text style={styles.inputItemTitle}>Nome</Text>
            <InputText
              value={nome}
              onChangeText={setNome}
              placeholder="Digite o nome"
              iconName="person-outline"
              textInput={styles.textInput}
            />
          </View>
          <View style={styles.inputItemWrapper}>
            <Text style={styles.inputItemTitle}>Email</Text>
            <InputText
              value={email}
              onChangeText={setEmail}
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
              onPress={() => lembrarSenha()}
            />
          </View>
          <View style={styles.inputItemWrapper}>
            <Text style={styles.inputItemTitle}>Imagem de perfil</Text>
            <InputText
              value={imagem}
              onChangeText={setImagem}
              placeholder="Informe a url da imagem"
              iconName="ios-lock-closed-outline"
            />
          </View>
        </View>
        {/* Button */}
        <View style={[styles.buttonSigIn]}>
          <Button
            path={require('../../assets/images/google.png')}
            titulo="Entre pelo Google"
            buttonStyles={styles.buttonStyles}
            tituloStyles={styles.tituloStyles}
          />
        </View>
        <View style={styles.buttonCreate}>
          <Button
            titulo="Cadastrar conta"
            tituloStyles={styles.tituloStyles}
            buttonStyles={[styles.buttonStyles]}
            onPress={() => cadastrarUsuario()}
          />
        </View>
      </ScrollView>
    </View>
  );
}
