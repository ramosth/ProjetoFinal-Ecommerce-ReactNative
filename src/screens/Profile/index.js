/* eslint-disable prettier/prettier */
import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import style from './style';
import Button from '../../Components/Button';
import { UsuarioLogado } from '../../contexto/contextUsuario';

const Profile = props => {
  const {usuario, logout} = React.useContext(UsuarioLogado);
  console.log('Home: ', usuario);

  return (
    <ScrollView>
      <View style={{flex: 1, alignItems: 'center'}}>
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
          <Text style={style.nome}>nome</Text>
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
