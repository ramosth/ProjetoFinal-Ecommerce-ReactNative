/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
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
      <View style={{ flex: 1, alignItems: 'center' }}>
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
        <View>
          <Text style={style.nome}>{nome}</Text>
        </View>
        <View>
          <Text style={style.nome}>{email}</Text>
        </View>
        <View>
          <Text style={style.nome}>{senha}</Text>
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
