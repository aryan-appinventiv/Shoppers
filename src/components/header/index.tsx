import {
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {images} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const Wwidth = Dimensions.get('window').width;
const Header = ({onPress}: {onPress: () => void}) => {
  const Navigation = useNavigation();

  return (
    <View style={styles.firstCont}>
      <Image source={images.tutorial} resizeMode="cover" style={styles.bcImg} />
      <TouchableOpacity style={styles.backCont} onPress={onPress}>
        <Image source={images.back} style={styles.back} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

