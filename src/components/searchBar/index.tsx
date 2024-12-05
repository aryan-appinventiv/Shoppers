import { Image, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { images } from '../../assets';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigators';
import styles from './styles';
import { strings } from '../../utils/strings';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'SearchPage'>;

const SearchBar = () => {
  const Navigation = useNavigation<NavigationProps>();
  
  const gotoSearch = () => {
    Navigation.navigate('SearchPage');
  };

  return (
    <TouchableOpacity style={styles.searchBar} activeOpacity={0.8} onPress={gotoSearch}>
      <Image source={images.search} style={styles.logo} />
      <Text style={styles.searchTxt}>{strings.search}</Text>
    </TouchableOpacity>
  );
};

export default SearchBar;

