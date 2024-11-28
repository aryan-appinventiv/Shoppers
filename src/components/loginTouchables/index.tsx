import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {images} from '../../assets';
import {colors} from '../../utils/colors';
import { vh, vw } from '../../utils/dimensions';

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
    marginVertical: vh(10),
    borderWidth: 1,
    borderRadius: vw(20),
    borderColor: colors.darkgray,
    flexDirection: 'row',
    gap: vh(10),
    paddingVertical: vh(10),
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  icon: {
    height: vh(20),
    width: vh(20),
  },
  iconDesc: {
    fontWeight: '600',
    fontSize: vw(16),
  },
});
