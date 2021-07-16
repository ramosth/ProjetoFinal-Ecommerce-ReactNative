/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {styles} from './styles';
import InputText from '../../Components/InputText';
import Button from '../../Components/Button';

export default function Cadastro({navigation}) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaConfirma, setSenhaConfirma] = useState('');

  const chamaLogin = () => {
    Alert.alert('Cadastro Efetuado', 'Usuário registrado com sucesso!');
    navigation.navigate('Login');
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
              onPress={() => Alert.alert('lembrar senha')}
            />
          </View>
          <View style={styles.inputItemWrapper}>
            <Text style={styles.inputItemTitle}>Confirma senha</Text>
            <InputText
              value={senhaConfirma}
              onChangeText={setSenhaConfirma}
              placeholder="Confirme a senha"
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
            onPress={() => chamaLogin()}
          />
        </View>
      </ScrollView>
    </View>
  );
}
