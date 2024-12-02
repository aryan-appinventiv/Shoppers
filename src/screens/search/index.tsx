import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import NewsList from '../../components/newsList';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {vh, vw} from '../../utils/dimensions';
import {images} from '../../assets';
import styles from './styles';
import {useTheme} from '../../utils/ThemeContext'
import { colors } from '../../utils/colors';

const Search = () => {
  const {top: safeTop} = useSafeAreaInsets();
  const route = useRoute();
  const {searchedNews} = route.params;

  const Navigation = useNavigation();
  const goback = () => {
    Navigation.goBack();
  };
  const {isDarkMode} = useTheme();
  return (
    <View style={[styles.container, {paddingTop: safeTop + vh(10), backgroundColor: isDarkMode? colors.black: colors.white}]}>
      <View style={styles.headerCont}>
        <TouchableOpacity onPress={goback}>
          <Image source={images.goback} style={[styles.back,{tintColor: isDarkMode? colors.white: colors.black}]} />
        </TouchableOpacity>
        <Text style={[styles.title, {color: isDarkMode? colors.white : colors.black}]}>Search Results</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <NewsList newsList={searchedNews} />
      </ScrollView>
    </View>
  );
};

export default Search;

