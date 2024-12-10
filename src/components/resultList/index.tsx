import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getResultListStyles } from './styles';
import { useTheme } from '../../utils/ThemeContext';
import { images } from '../../assets';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigators';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Detail'>;

interface ResultListProps {
  data: Array<{
    image_url?: string;
    category: string;
    title: string;
    source_icon?: string;
    source_name: string;
  }>;
}

const ResultList: React.FC<ResultListProps> = ({ data }) => {
  const { isDarkMode } = useTheme();
  const styles = getResultListStyles(isDarkMode);
  const Navigation = useNavigation<NavigationProps>();

  const renderItem = ({ item }: { item: ResultListProps['data'][number] }) => (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.newsItem}
      onPress={() => Navigation.navigate('Detail', { item })}
    >
      <Image
        source={!item.image_url ? images.tutorial : { uri: item.image_url }}
        style={styles.itemImg}
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
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      bounces={false}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ResultList;
