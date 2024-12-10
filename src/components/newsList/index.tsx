import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Loading from '../loading';
import { images } from '../../assets';
import { useTheme } from '../../utils/ThemeContext';
import { getNewslistStyles } from './styles';
import { RootStackParamList } from '../../navigators';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Detail'>;

interface NewsItem {
  image_url?: string;
  category: string;
  title: string;
  source_icon?: string;
  source_name: string;
}

interface NewsListProps {
  newsList: NewsItem[];
}

const NewsList: React.FC<NewsListProps> = ({ newsList }) => {
  const [errorImages, setErrorImages] = useState<Record<number, boolean>>({});
  const Navigation = useNavigation<NavigationProps>();

  const gotoDetail = (item: NewsItem) => {
    Navigation.navigate('Detail', { item });
  };

  const { isDarkMode } = useTheme();
  const styles = getNewslistStyles(isDarkMode);

  const handleImageError = (index: number) => {
    setErrorImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <View style={styles.container}>
      {newsList.length === 0 ? (
        <Loading />
      ) : (
        newsList.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.itemContainer}
            activeOpacity={0.5}
            onPress={() => gotoDetail(item)}
          >
            <Image
              source={
                errorImages[index]
                  ? images.imagePlaceholder
                  : { uri: item.image_url }
              }
              style={styles.itemImg}
              onError={() => handleImageError(index)}
            />
            <View style={styles.itemInfo}>
              <Text style={styles.itemCategory}>{item.category}</Text>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <View style={styles.itemSourceInfo}>
                {item.source_icon && (
                  <Image
                    source={{ uri: item.source_icon }}
                    style={styles.itemSourceImg}
                  />
                )}
                <Text style={styles.itemSourceName}>{item.source_name}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))
      )}
    </View>
  );
};

export default NewsList;

