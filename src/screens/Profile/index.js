import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import style from './style';
import Button from '../../Components/Button';

const Profile = props => {
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
        <Button titulo={'Logout'} buttonStyles={style.buttonCheckout} />
      </View>
    </ScrollView>
  );
};

export default Profile;
