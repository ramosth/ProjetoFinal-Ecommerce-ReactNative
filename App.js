/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { Rotas } from './src/navigation/Rotas';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { UsuarioLogadoProvider } from './src/contexto/contextUsuario';
import colors from './src/assets/colors/colors';

const App = () => {
  return (
    <SafeAreaProvider style={{ backgroundColor: colors.backgroundColor }}>
      <NavigationContainer>
        <UsuarioLogadoProvider>
          <Rotas />
        </UsuarioLogadoProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
