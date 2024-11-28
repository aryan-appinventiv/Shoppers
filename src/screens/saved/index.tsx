import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {vh, vw} from '../../utils/dimensions';
import { images } from '../../assets';
import { colors } from '../../utils/colors';

const Saved = () => {
  const [savedNews, setSavedNews] = useState([]);
  const navigation = useNavigation();

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
        />
      ) : (
        <Text style={styles.emptyMessage}>No saved news yet.</Text>
      )}
    </View>
  );
};

export default Saved;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  newsItem: {
    padding: vw(16),
    borderBottomWidth: 1,
    borderBottomColor: colors.borderClr,
    flexDirection: 'row',
    alignItems: 'center',
    gap: vh(10),
    backgroundColor: colors.white,
  },
  emptyMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  itemImg: {
    height: vw(80),
    width: vw(80),
    borderRadius: vw(20),
  },
  itemInfo: {
    flex: 1,
    gap: vh(10),
    justifyContent: 'space-between',
  },
  itemCategory: {
    fontSize: vw(12),
    color: colors.gray,
    textTransform: 'capitalize',
  },
  itemTitle: {
    fontSize: vw(12),
    fontWeight: '600',
    color: colors.black,
  },
  itemSourceInfo: {
    flexDirection: 'row',
    gap: vw(8),
    alignItems: 'center',
  },
  itemSourceImg: {
    width: vw(20),
    height: vw(20),
    borderRadius: vw(20),
  },
  itemSourceName: {
    fontSize: vh(10),
    fontWeight: '400',
    color: colors.gray,
  },
});
