import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import AppHeader from '../../components/appHeader';
import SearchBar from '../../components/searchBar';
import axios from 'axios';
import BreakingNews from '../../components/breakingNews.tsx';
import Categories from '../../components/categories/index.tsx';
import NewsList from '../../components/newsList/index.tsx';
import Loading from '../../components/loading/index.tsx';
import {strings} from '../../utils/strings/index.ts';
import {useTheme} from '../../utils/ThemeContext.js';
import {colors} from '../../utils/colors/index.ts';
import styles from './styles.ts';
import {keyAPI} from '../../utils/newsKeyAPI/index.tsx';

const Home = () => {
  const [breakingNews, setBreakingNews] = useState([]);
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBreakingNews();
    getNews();
  }, []);

  const {isDarkMode} = useTheme();
  const getBreakingNews = async () => {
    try {
      const URL = `https://newsdata.io/api/1/news?apikey=${keyAPI}&country=in&language=en&image=1&removeduplicate=1&size=5`;
      const response = await axios.get(URL);
      if (response && response.data) {
        setIsLoading(false);
        setBreakingNews(response.data.results);
      }
    } catch (err) {
      console.log(strings.error, err);
      setIsLoading(true);
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

  return (
    <ScrollView
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? colors.black : colors.white},
      ]}
      showsVerticalScrollIndicator={false}
      bounces={false}>
      <AppHeader />
      <SearchBar />
      {isLoading ? <Loading /> : <BreakingNews newsList={breakingNews} />}

      <Categories onCategoryChanged={onCatChanged} />
      <NewsList newsList={news} />
    </ScrollView>
  );
};

export default Home;
