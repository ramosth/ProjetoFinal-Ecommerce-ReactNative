/* eslint-disable prettier/prettier */
import React from 'react'
import { View } from 'react-native'
import BestSeller from './src/Components/BestSeller';
import Header from './src/Components/Header/Header';

const App = () => {

  return (
    // <SafeAreaView>
    //   <StatusBar />
    //   <ScrollView>
    //     <View>

    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
    <View>
      <Header />
      <BestSeller />
    </View>
  );
};

export default App;
