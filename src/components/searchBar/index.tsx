import { View, TextInput, Image } from 'react-native';
import React, { useRef } from 'react';
import { images } from '../../assets';
import { colors } from '../../utils/colors';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import styles from './styles';

const SearchBar = () => {
  const Navigation = useNavigation();
  const textInputRef = useRef(null); 

  const gotoSearch = () => {
    Navigation.navigate('SearchPage');
  };

  useFocusEffect(
    React.useCallback(() => {
      if (textInputRef.current) {
        textInputRef.current.blur();
      }
    }, [])
  );

  return (
    <View style={styles.searchBar}>
      <Image source={images.search} style={styles.logo} />
      <TextInput
        ref={textInputRef}
        placeholder="Search"
        placeholderTextColor={colors.darkgray}
        autoCapitalize="none"
        style={styles.searchTxt}
        onFocus={gotoSearch} 
      />
    </View>
  );
};

export default SearchBar;

