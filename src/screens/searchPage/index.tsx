import {
  ActivityIndicator,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {images} from '../../assets';
import {colors} from '../../utils/colors';
import {vh} from '../../utils/dimensions';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import axios from 'axios';
import {strings} from '../../utils/strings';
import ResultList from '../../components/resultList';
import {useTheme} from '../../utils/ThemeContext';
import {getSearchedPageStyles} from './styles';
import {keyAPI} from '../../utils/newsKeyAPI';
import { useNavigation } from '@react-navigation/native';

const SearchPage = () => {
  const [result, setResult] = useState('');
  const [search, setSearch] = useState('');
  const [isloading, setIsLoading] = useState(false);
  const [disable, setDisable] = useState(true);
  const {top: safeTop} = useSafeAreaInsets();
  const {isDarkMode} = useTheme();
  const styles = getSearchedPageStyles(isDarkMode, disable);
  const Navigation = useNavigation();
  const textInputRef = useRef<TextInput>(null); 
  const getSearchedNews = async (query: string = '') => {
    try {
      setIsLoading(true);
      let queryString = '';
      if (query.length !== 0) {
        queryString = `&q=${query}`;
      }

      const URL = `https://newsdata.io/api/1/news?apikey=${keyAPI}&language=en&image=1&removeduplicate=1${queryString}`;
      const response = await axios.get(URL);
      if (response && response.data) {
        setResult(response.data.results);
      }
      setIsLoading(false);
    } catch (err) {
      console.log(strings.error, err);
    }
  };
  const goback = () => {
    Navigation.goBack();
  };
  const clear = () =>{
    setSearch('');
    setResult('');
  }

  return (
    <View style={[styles.container, {paddingTop: safeTop + vh(20)}]}>
      <View style={styles.searchCont}>
        <View style={styles.searchBar}>
          <TouchableOpacity onPress={goback}>
            <Image source={images.backBlack} style={styles.logo} />
          </TouchableOpacity>
          <TextInput
            autoFocus={true}
            ref={textInputRef}
            placeholder="Search"
            placeholderTextColor={colors.darkgray}
            autoCapitalize="none"
            style={styles.searchTxt}
            returnKeyType="go"
            value={search}
            onChangeText={txt => {
              setSearch(txt), setDisable(txt.trim().length === 0);
            }}
            onSubmitEditing={() => {
              if (!disable) {
                getSearchedNews(search);
              }
            }}
          />
          {search && (
            <TouchableOpacity style={styles.crossCont} onPress={clear}>
              <Image source={images.close} style={styles.crossImg} />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          disabled={disable}
          style={styles.searchBtn}
          activeOpacity={0.5}
          onPress={() => getSearchedNews(search)}>
          <Text style={styles.searchBtnTxt}>Search</Text>
        </TouchableOpacity>
      </View>
      {isloading && <ActivityIndicator size={'large'} color={colors.primary} />}

      <View style={styles.mainCont}>
        {result.length > 0 ? (
          <ResultList data={result} />
        ) : (
          isloading ? (<></>) : (<Text style={styles.emptyMessage}>{strings.no_news_to_show}</Text>
          )
        )}
      </View>
    </View>
  );
};

export default SearchPage;
