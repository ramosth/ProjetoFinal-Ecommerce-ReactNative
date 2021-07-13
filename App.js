/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import SelectCategory from './src/Components/SelectCategory';

const App = () => {

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <SelectCategory />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
