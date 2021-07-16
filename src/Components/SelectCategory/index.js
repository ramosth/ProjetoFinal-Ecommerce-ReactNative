/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import {categoriesData} from '../../assets/data/categoriaData';
import colors from '../../assets/colors/colors';
import {styles} from './styles';

export default function SelectCategory() {
  const [itemCategoria, setItemCategoria] = useState(0);

  const renderCategoryItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={[
          styles.categoryItemWrapper,
          {marginLeft: item.id === 1 ? 24 : 0},
        ]}
        onPress={() => setItemCategoria(index)}>
        <View
          style={[
            itemCategoria === index
              ? [
                  styles.categoryItemIconWrapper,
                  {backgroundColor: colors.laranja},
                ]
              : styles.categoryItemIconWrapper,
          ]}>
          <View>{item.icon}</View>
        </View>
        <Text
          style={[
            itemCategoria === index
              ? [styles.categoryItemTitle, {color: colors.laranja}]
              : styles.categoryItemTitle,
          ]}>
          {item.title}
        </Text>
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
