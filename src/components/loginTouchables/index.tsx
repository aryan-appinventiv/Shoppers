import {Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const LoginTouchable = ({title, img, onPress}: {title: string, img: any, onPress: () => void}) => {
  console.log(img);
  return (
    <TouchableOpacity style={styles.touchable} onPress={onPress} activeOpacity={0.5}>
      <Image source={img} style={styles.icon} />
      <Text style={styles.iconDesc}>{title}</Text>
    </TouchableOpacity>
  );
};

export default LoginTouchable;

