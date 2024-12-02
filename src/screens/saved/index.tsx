import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import { images } from '../../assets';
import { getSavedStyles } from './styles';
import { useTheme } from '../../utils/ThemeContext'

const Saved = () => {
  const [savedNews, setSavedNews] = useState([]);
  const navigation = useNavigation();

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

  const renderItem = ({item}) => (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.newsItem}
      onPress={() => navigation.navigate('Detail', {item})}>
      <Image
        source={!item.image_url ? images.tutorial : {uri: item.image_url}}
        style={styles.itemImg}
      />
      <View style={styles.itemInfo}>
        <Text style={styles.itemCategory}>{item.category}</Text>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <View style={styles.itemSourceInfo}>
          <Image
            source={{uri: item.source_icon}}
            style={styles.itemSourceImg}
          />
          <Text style={styles.itemSourceName}>{item.source_name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {savedNews.length > 0 ? (
        <FlatList
          data={savedNews}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          bounces={false}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text style={styles.emptyMessage}>No saved news yet.</Text>
      )}
    </View>
  );
};

export default Saved;

