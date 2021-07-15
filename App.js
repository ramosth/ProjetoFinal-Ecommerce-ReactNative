import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
<<<<<<< HEAD
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from './src/screens/Home';
import Details from './src/screens/Details';

const Stack = createStackNavigator();
=======
import Rota from './navigation/rota';
>>>>>>> ebf5ea14ee0e77a2d5ed5943e8dde8d60f16d402

const App = () => {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
=======
      <Rota />
>>>>>>> ebf5ea14ee0e77a2d5ed5943e8dde8d60f16d402
    </NavigationContainer>
  );
};

export default App;
