import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {images} from '../../assets';
import {colors} from '../../utils/colors';
import {vh} from '../../utils/dimensions';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import axios from 'axios';
import {strings} from '../../utils/strings';
import ResultList from '../../components/resultList';
import {useTheme} from '../../utils/ThemeContext';
import {getSearchedPageStyles} from './styles';

const SearchPage = () => {
  const [result, setResult] = useState('');
  const [search, setSearch] = useState('');
  const [disable, setDisable] = useState(true);
  const {top: safeTop} = useSafeAreaInsets();
  const {isDarkMode} = useTheme();
  const styles = getSearchedPageStyles(isDarkMode, disable);
  const getSearchedNews = async (query: string = '') => {
    try {
      let queryString = '';
      if (query.length !== 0) {
        queryString = `&q=${query}`;
      }

      const URL = `https://newsdata.io/api/1/news?apikey=pub_58618a7cc7260bd7721baed946811425b8473&language=en&image=1&removeduplicate=1${queryString}`;
      const response = await axios.get(URL);
      if (response && response.data) {
        setResult(response.data.results);
        //console.log('results----------->', result);
      }
    } catch (err) {
      console.log(strings.error, err);
    }
  };
  console.log('disable------>', disable);
  return (
    <View style={[styles.container, {paddingTop: safeTop + vh(20)}]}>
      <View style={styles.searchCont}>
        <View style={styles.searchBar}>
          <Image source={images.search} style={styles.logo} />
          <TextInput
            placeholder="Search"
            placeholderTextColor={colors.darkgray}
            autoCapitalize="none"
            style={styles.searchTxt}
            returnKeyType="go"
            value={search}
            onChangeText={txt => {setSearch(txt), setDisable(txt.length === 0) }}
          />
        </View>
        <TouchableOpacity
          disabled={disable}
          style={styles.searchBtn}
          activeOpacity={0.5}
          onPress={() => getSearchedNews(search)}>
          <Text style={styles.searchBtnTxt}>Search</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.mainCont}>
        {result.length > 0 ? (
          <ResultList data={result} />
        ) : (
          <Text style={styles.emptyMessage}>No news to show.</Text>
        )}
      </View>
    </View>
  );
};

export default SearchPage;
