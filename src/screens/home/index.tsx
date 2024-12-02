import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import AppHeader from '../../components/appHeader';
import SearchBar from '../../components/searchBar';
import axios from 'axios';
import BreakingNews from '../../components/breakingNews.tsx';
import Categories from '../../components/categories/index.tsx';
import NewsList from '../../components/newsList/index.tsx';
import Loading from '../../components/loading/index.tsx';
import { useNavigation } from '@react-navigation/native';
import { strings } from '../../utils/strings/index.ts';
import { useTheme } from '../../utils/ThemeContext.js';
import { colors } from '../../utils/colors/index.ts';

const Home = () => {
  const [breakingNews, setBreakingNews] = useState([]);
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    getBreakingNews();
    getNews();
  },[])

  const {isDarkMode} = useTheme();

  const Navigation = useNavigation();

  const getBreakingNews=async()=>{
    try{
      const URL = `https://newsdata.io/api/1/news?apikey=pub_58618a7cc7260bd7721baed946811425b8473&country=in&language=en&image=1&removeduplicate=1&size=5`
      const response = await axios .get(URL);
      if(response && response.data){
        setIsLoading(false);
        setBreakingNews(response.data.results)
      }
    } catch(err){
      console.log(strings.error, err);
      setIsLoading(true);
    }
  }

  const getNews=async(category:string = '')=>{
    try{
      let categoryString = '';
      if(category.length !== 0){
        categoryString = `&category=${category}`;
      }
  
      const URL = `https://newsdata.io/api/1/news?apikey=pub_58618a7cc7260bd7721baed946811425b8473&language=en&image=1&removeduplicate=1${categoryString}`;
      const response = await axios .get(URL);
      if(response && response.data){
        setNews(response.data.results)
      }
    } catch(err){
      console.log(strings.error, err);
    }
  }

  const onCatChanged = (category:string)=>{
    setNews([]);
    getNews(category);
  }

  return (
    <ScrollView style={[styles.container,{backgroundColor:isDarkMode?colors.black:colors.white}]} showsVerticalScrollIndicator={false} bounces={false}>
      <AppHeader/>
      <SearchBar/>
      {isLoading? (<Loading/>) : (<BreakingNews newsList={breakingNews}/>)}
      
      <Categories onCategoryChanged={onCatChanged}/>
      <NewsList newsList={news}/>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
