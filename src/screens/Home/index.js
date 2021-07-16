/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Header from '../../Components/Header/Header';
import Style from '../Home/Style';
import SelectCategory from '../../Components/SelectCategory';
import Pesquisa from '../../Components/InputText';
import HotSales from '../../Components/HotSales';
import QrCode from '../../Components/QrCode';
import BestSellerReduz from '../../Components/BestSellerReduz';

const Home = ({ navigation }) => {
  const [input, setInput] = useState('');
  return (
    <View>
      <Header />
      <SelectCategory />
      <View style={Style.pesquisa}>
        <Pesquisa
          value={input}
          onChangeText={setInput}
          placeholder="Search"
          iconName="md-search-outline"
        />
        <QrCode />
      </View>
      <View>
        <HotSales />
      </View>
      <BestSellerReduz />
    </View>
  );
};

export default Home;
