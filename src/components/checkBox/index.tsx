import { Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../../utils/colors';
import { images } from '../../assets';
import { useTheme } from '../../utils/ThemeContext'
import styles from './styles';

const CheckBox = ({ label, checked, onPress }: {label: string, checked: boolean | any, onPress: () => void}) => {
  const {isDarkMode} = useTheme();
  return (
    <TouchableOpacity style={[styles.container, checked && styles.selected, {backgroundColor: isDarkMode? colors.borderClr: colors.white}]} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
      {checked && <Image source={images.checked} style={styles.icon} />}
    </TouchableOpacity>
  );
};

export default CheckBox;

