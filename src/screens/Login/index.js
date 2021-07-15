/* eslint-disable prettier/prettier */
import React, { useContext, useState } from 'react';
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

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // ACESSANDO O CONTEXTO
  const { usuario, login } = useContext(UsuarioLogado);
  console.log('usuario => ', usuario);

  const chamaLogin = () => {
    const usuarioCadastrado = {
      id: '1',
      nome: 'Mário',
      email: 'mario@gmail.com',
      idade: 42,
      premium: true,
    };
    login(usuarioCadastrado);
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
            onPress={() => Alert.alert('Login pelo Gmail')}/>
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

