import React from 'react';
import colors from '../colors/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const categoriesData = [
  {
    id: 1,
    title: 'Phones',
    icon: <FontAwesome name="mobile-phone" size={32} color={colors.cinza} />,
  },
  {
    id: 2,
    title: 'Computer',
    icon: <MaterialIcons name="computer" size={28} color={colors.cinza} />,
  },
  {
    id: 3,
    title: 'Health',
    icon: <FontAwesome name="heartbeat" size={28} color={colors.cinza} />,
  },
  {
    id: 4,
    title: 'Books',
    icon: (
      <MaterialCommunityIcons name="bookshelf" size={28} color={colors.cinza} />
    ),
  },
  {
    id: 5,
    title: 'Sports',
    icon: (
      <MaterialIcons name="sports-esports" size={30} color={colors.cinza} />
    ),
  },
];
