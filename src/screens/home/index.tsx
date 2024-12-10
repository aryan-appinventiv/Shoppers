import React, {useEffect, useState} from 'react';
import {ScrollView, RefreshControl, View} from 'react-native';
import AppHeader from '../../components/appHeader';
import SearchBar from '../../components/searchBar';
import axios from 'axios';
import BreakingNews from '../../components/breakingNews.tsx';
import Categories from '../../components/categories/index.tsx';
import NewsList from '../../components/newsList/index.tsx';
import {strings} from '../../utils/strings/index.ts';
import {useTheme} from '../../utils/ThemeContext.js';
import {colors} from '../../utils/colors/index.ts';
import styles from './styles.ts';
import {keyAPI} from '../../utils/newsKeyAPI/index.tsx';

const Home = () => {
  const [breakingNews, setBreakingNews] = useState([]);
  const [news, setNews] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchAllData();
  }, []);

  const {isDarkMode} = useTheme();

  const fetchAllData = async () => {
    await getBreakingNews();
    await getNews();
  };

  const getBreakingNews = async () => {
    try {
      const URL = `https://newsdata.io/api/1/news?apikey=${keyAPI}&country=in&language=en&image=1&removeduplicate=1&size=5`;
      const response = await axios.get(URL);
      if (response && response.data) {
        setBreakingNews(response.data.results);
      }
    } catch (err) {
      console.log(strings.error, err);
    }
  };

  const getNews = async (category: string = '') => {
    try {
      let categoryString = '';
      if (category.length !== 0) {
        categoryString = `&category=${category}`;
      }

      const URL = `https://newsdata.io/api/1/news?apikey=${keyAPI}&language=en&image=1&removeduplicate=1${categoryString}`;
      const response = await axios.get(URL);
      if (response && response.data) {
        setNews(response.data.results);
      }
    } catch (err) {
      console.log(strings.error, err);
    }
  };

  const onCatChanged = (category: string) => {
    setNews([]);
    getNews(category);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchAllData();
    setRefreshing(false);
  };

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? colors.black : colors.white},
      ]}>
      <AppHeader />
      <SearchBar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={isDarkMode ? colors.white : colors.black}
          />
        }>
        <BreakingNews newsList={breakingNews} />
        <Categories onCategoryChanged={onCatChanged} />
        <NewsList newsList={news} />
      </ScrollView>
    </View>
  );
};

export default Home;
