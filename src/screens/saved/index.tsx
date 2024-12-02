import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import { getSavedStyles } from './styles';
import { useTheme } from '../../utils/ThemeContext'
import ResultList from '../../components/resultList';

const Saved = () => {
  const [savedNews, setSavedNews] = useState([]);

  const {isDarkMode} = useTheme();
  const styles = getSavedStyles(isDarkMode);

  const fetchSavedNews = async () => {
    try {
      const savedItems = await AsyncStorage.getItem('savedNews');
      const savedList = savedItems ? JSON.parse(savedItems) : [];
      setSavedNews(savedList);
    } catch (error) {
      console.log('Error fetching saved news:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchSavedNews();
    }, []),
  );

  return (
    <View style={styles.container}>
      {savedNews.length > 0 ? (
        <ResultList data={savedNews}/>
      ) : (
        <Text style={styles.emptyMessage}>No saved news yet.</Text>
      )}
    </View>
  );
};

export default Saved;

