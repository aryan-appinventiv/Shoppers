import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { getResultListStyles } from './styles';
import { useTheme } from '../../utils/ThemeContext'
import { images } from '../../assets';

const ResultList = ({data}) => {
    const {isDarkMode} = useTheme();
    const styles = getResultListStyles(isDarkMode);
    const Navigation = useNavigation();
    const renderItem = ({item}) => (
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.newsItem}
          onPress={() => Navigation.navigate('Detail', {item})}>
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
    <FlatList
    data={data}
    keyExtractor={(item, index) => index.toString()}
    renderItem={renderItem}
    bounces={false}
    showsVerticalScrollIndicator={false}
  />
  )
}

export default ResultList

const styles = StyleSheet.create({})