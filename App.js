/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import BestSeller from './src/Components/BestSeller';
import Header from './src/Components/Header/Header';
import HeaderTwo from './src/Components/HeaderTwo/HeaderTwo';
import HeaderTree from './src/Components/HeaderTree/HeaderTree';
import InputText from './src/Components/InputText';
import SelectCategory from './src/Components/SelectCategory';
import HotSales from './src/Components/HotSales';
import QrCode from './src/Components/QrCode';
import Card from './src/screens/Card';

const App = () => {

  const [input, setInput] = useState('');

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View>
          {/* <Header />
          <HeaderTwo />
          <HeaderTree />
          <SelectCategory />
          <InputText
            value={input}
            onChangeText={setInput}
            placeholder="Search"
            iconName="md-search-outline"
          />
          <QrCode />
          <HotSales /> */}
          <BestSeller />
          {/* <Card /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
