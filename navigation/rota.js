import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../src/screens/Home';
import Details from '../src/screens/Details';
import CardProduto from '../src/Components/BestSeller/CardProduto';

const Stack = createStackNavigator();

const Rota = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CardProduto"
        component={CardProduto}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Rota;
