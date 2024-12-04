import { View, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import React, { useRef } from 'react';
import { images } from '../../assets';
import { colors } from '../../utils/colors';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigators';
import styles from './styles';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'SearchPage'>;

const SearchBar = () => {
  const Navigation = useNavigation<NavigationProps>();
  const textInputRef = useRef<TextInput>(null); 
  
  const gotoSearch = () => {
    Navigation.navigate('SearchPage');
  };

  // useFocusEffect(
  //   React.useCallback(() => {
  //     if (textInputRef.current) {
  //       textInputRef.current.blur();
  //     }
  //   }, [])
  // );

  return (
    <TouchableOpacity style={styles.searchBar} activeOpacity={0.8} onPress={gotoSearch}>
      <Image source={images.search} style={styles.logo} />
      <Text style={styles.searchTxt}>Search</Text>
      {/* <TextInput
        //ref={textInputRef}
        placeholder="Search"
        placeholderTextColor={colors.darkgray}
        autoCapitalize="none"
        style={styles.searchTxt}
        //onFocus={gotoSearch} 
      /> */}
    </TouchableOpacity>
  );
};

export default SearchBar;

