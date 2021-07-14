/* eslint-disable prettier/prettier */
import colors from '../../assets/colors/colors';
import { styles } from './styles';
import React from 'react';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function QrCode(props) {
  return (
    <View style={styles.container}>
      <Ionicons name="qr-code" size={22} color={colors.branco} />
    </View>
  );
}
