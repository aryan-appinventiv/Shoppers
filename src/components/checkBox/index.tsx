import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { vh, vw } from '../../utils/dimensions';
import { colors } from '../../utils/colors';
import { images } from '../../assets';

const CheckBox = ({ label, checked, onPress }) => {
  return (
    <TouchableOpacity style={[styles.container, checked && styles.selected]} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
      {checked && <Image source={images.checked} style={styles.icon} />}
    </TouchableOpacity>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.gray,
    paddingVertical: vh(8),
    paddingHorizontal: vw(16),
    borderRadius: vw(16),
  },
  selected: {
    borderColor: colors.primary, 
  },
  label: {
    color: colors.black,
  },
  icon: {
    height: vw(14),
    width: vw(14),
    marginLeft: vw(8),
  },
});
