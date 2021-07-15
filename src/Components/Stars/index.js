import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const Stars = () => {
  const [defaultRating, setDefaultRating] = useState(1);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const RatingBar = () => {
    return (
      <View style={styles.ratingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity key={item} onPress={() => setDefaultRating(item)}>
              <Image
                style={styles.starImageStyle}
                source={
                  item <= defaultRating
                    ? require('../../assets/images/star_filled.png')
                    : require('../../assets/images/star_corner.png')
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return <RatingBar />;
};

export default Stars;
