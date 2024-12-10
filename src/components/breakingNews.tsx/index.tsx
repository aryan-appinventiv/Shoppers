import {FlatList, Text, View} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import SliderItem from '../sliderItem';
import {getBreakingStyle} from './styles';
import {useTheme} from '../../utils/ThemeContext';

const BreakingNews = ({newsList}) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = prevIndex + 1 < newsList.length ? prevIndex + 1 : 0;
        flatListRef.current?.scrollToIndex({index: nextIndex, animated: true});
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [newsList.length]);

  const {isDarkMode} = useTheme();
  const styles = getBreakingStyle(isDarkMode);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Breaking News</Text>
      <View style={styles.slideWrapper}>
        <FlatList
          ref={flatListRef}
          data={newsList}
          scrollEnabled={false}
          keyExtractor={(item, index) => `list_item${index}`}
          renderItem={({item, index}) => (
            <SliderItem slideItem={item} index={index} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onScrollToIndexFailed={info => {
            flatListRef.current?.scrollToOffset({
              offset: info.averageItemLength * info.index,
              animated: true,
            });
          }}
        />
        <View style={styles.dotsWrapper}>
          {newsList.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, currentIndex === index && styles.activeDot]}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default BreakingNews;
