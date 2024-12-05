import { Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from './styles';

interface LoginTouchableProps {
  title: string;
  img: string | any; 
  onPress: () => void;
}

const LoginTouchable: React.FC<LoginTouchableProps> = ({ title, img, onPress }) => {
  return (
    <TouchableOpacity style={styles.touchable} onPress={onPress} activeOpacity={0.5}>
      <Image source={img} style={styles.icon} />
      <Text style={styles.iconDesc}>{title}</Text>
    </TouchableOpacity>
  );
};

export default LoginTouchable;
