/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import { categoriesData } from '../../assets/data/categoriaData';
import colors from '../../assets/colors/colors';
import { styles } from './styles';

export default function SelectCategory() {

  const [itemCategoria, setItemCategoria] = useState(0);

  const renderCategoryItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={[styles.categoryItemWrapper, { marginLeft: item.id === 1 ? 24 : 0 }]}
        onPress={() => setItemCategoria(index)}
      >
        <View style={[itemCategoria === index ? [styles.categoryItemIconWrapper, { backgroundColor: colors.laranja }] : styles.categoryItemIconWrapper] }>
          <View>{item.icon}</View>
        </View>
        <Text style={[itemCategoria === index ? [styles.categoryItemTitle, {color: colors.laranja}] : styles.categoryItemTitle]}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titlesWrapper}>
        <Text style={styles.titlesTitleCategoria}>Select Category</Text>
        <TouchableOpacity>
          <Text style={styles.titlesTitleAll}>view all</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={categoriesData}
          renderItem={renderCategoryItem}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   titlesWrapper: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginLeft: 17,
//     marginTop: 18,
//     marginBottom: 24,
//   },
//   titlesTitleCategoria: {
//     fontFamily: 'Montserrat-Bold',
//     fontSize: 25,
//   },
//   titlesTitleAll: {
//     fontFamily: 'Montserrat-Regular',
//     fontSize: 15,
//     marginRight: 33,
//     color: colors.laranja,
//   },
//   categoryItemWrapper: {
//     padding: 3,
//     marginBottom: 7,
//     marginRight: 20,
//   },
//   categoryItemIconWrapper: {
//     backgroundColor: colors.branco,
//     width: 71,
//     height: 71,
//     borderRadius: 71,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: colors.preto,
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },

//   categoryItemTitle: {
//     fontFamily: 'Montserrat-Bold',
//     fontSize: 12,
//     textAlign: 'center',
//     color: colors.azul,
//     marginTop: 8,
//   },
// });
