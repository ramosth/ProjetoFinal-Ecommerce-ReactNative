/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, Image, TextInput } from 'react-native';
import Button from '../../Components/Button';
import { UsuarioLogado } from '../../contexto/contextUsuario';
import style from './Style';

const Profile = props => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const { usuario, logout } = React.useContext(UsuarioLogado);
  console.log('Home: ', usuario);

  useEffect(() => {
    const recuperarNome = async () => {
      const nomeSalvo = await AsyncStorage.getItem('NomeCadastro');
      if (nomeSalvo) {
        setNome(nomeSalvo);
      }
    };

    const recuperarEmail = async () => {
      const emailSalvo = await AsyncStorage.getItem('EmailCadastro');
      if (emailSalvo) {
        setEmail(emailSalvo);
      }
    };

    const recuperarSenha = async () => {
      const senhaSalvo = await AsyncStorage.getItem('SenhaCadastro');
      if (senhaSalvo) {
        setSenha(senhaSalvo);
      }
    };

    recuperarNome();
    recuperarEmail();
    recuperarSenha();
  }, []);

  return (
    <ScrollView>
      <View style={{ flex: 1}}>
        <View style={style.fundo}>
          <Text style={style.meuPerfil}>Meu Perfil</Text>
          <View style={style.perfil}>
            <Image
              resizeMode="contain"
              style={style.image}
              source={require('../../assets/images/perfil.png')}
            />
          </View>
        </View>
        <View style={style.textoNome}>
        <Text style={style.nome}>Nome</Text>
          <TextInput
          style={style.input}
          placeholder={nome}
          editable={false}
          />
        </View>

        <View style={style.textoEmail}>
          <Text style={style.nome}>Email</Text>
          <TextInput
          style={style.input}
          placeholder={email}
          editable={false}
          />
        </View>
        <Button
          titulo={'Logout'}
          buttonStyles={style.buttonCheckout}
          onPress={() => logout()}
        />
      </View>
    </ScrollView>
  );
};

export default Profile;
