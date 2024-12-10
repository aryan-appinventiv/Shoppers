import {View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {images} from '../../assets';
import styles from './styles';
import FastImage from 'react-native-fast-image';

const Header = ({onPress}: {onPress: () => void}) => {

  return (
    <View style={styles.firstCont}>
      <FastImage source={images.tutorial} resizeMode="cover" style={styles.bcImg} />
      <TouchableOpacity style={styles.backCont} onPress={onPress}>
        <Image source={images.back} style={styles.back} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
