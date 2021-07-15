import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from './src/assets/colors/colors';
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import Card from './src/screens/Card';
import Profile from './src/screens/Profile';
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: styles.tabBar,
        activeTintColor: colors.laranja,
        inactiveTintColor: colors.cinza,
        showLabel: false, //deixa de exibir o nome na bottomTab
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="home" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Card"
        component={Card}
        options={{
          tabBarIcon: ({color}) => (
            // <AntDesign name="shoppingcart" size={32} color={color} />
            <MaterialIcons name="shopping-cart" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" size={32} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.azul,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default App;
