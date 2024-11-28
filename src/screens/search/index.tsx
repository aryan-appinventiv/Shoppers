import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
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

const Search = () => {
  const {top: safeTop} = useSafeAreaInsets();
  const route = useRoute();
  const {searchedNews} = route.params;

  const Navigation = useNavigation();
  const goback = () => {
    Navigation.goBack();
  };
  return (
    <View style={[styles.container, {paddingTop: safeTop + vh(10)}]}>
      <View style={styles.headerCont}>
        <TouchableOpacity onPress={goback}>
          <Image source={images.goback} style={styles.back} />
        </TouchableOpacity>
        <Text style={styles.title}>Search Results</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <NewsList newsList={searchedNews} />
      </ScrollView>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: vw(22),
    fontWeight: 'bold',
  },
  back: {
    height: vw(25),
    width: vw(25),
  },
  headerCont: {
    paddingHorizontal: vw(15),
    flexDirection: 'row',
    gap: vw(20),
    marginBottom: vw(5),
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? vh(15) : vh(5),
  },
});
