import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {images} from '../../assets';
import {colors} from '../../utils/colors';

const LoginTouchable = ({title, img, onPress}) => {
  console.log(img);
  return (
    <TouchableOpacity style={styles.touchable} onPress={onPress} activeOpacity={0.5}>
      <Image source={img} style={styles.icon} />
      <Text style={styles.iconDesc}>{title}</Text>
    </TouchableOpacity>
  );
};

export default LoginTouchable;

const styles = StyleSheet.create({
  touchable: {
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'darkgray',
    flexDirection: 'row',
    gap: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  icon: {
    height: 20,
    width: 20,
  },
  iconDesc: {
    fontWeight: '600',
    fontSize: 16,
  },
});
