import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Loading from '../loading';
import {images} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../../utils/ThemeContext';
import { getNewslistStyles } from './styles';

const NewsList = ({newsList}: {newsList: any}) => {
  const Navigation = useNavigation();
  const gotoDetail = (item: any) => {
    Navigation.navigate('Detail', {item});
  };
  const {isDarkMode} = useTheme();
  const styles = getNewslistStyles(isDarkMode);

  return (
    <View style={styles.container}>
      {newsList.length == 0 ? (
        <Loading />
      ) : (
        newsList.map((item: any,index: any)=>{
            return(
            <TouchableOpacity key = {index}  style={styles.itemContainer} activeOpacity={0.5} onPress={()=>gotoDetail(item)}>
                <Image source = {!item.image_url ? images.tutorial : { uri: item.image_url }}  style={styles.itemImg}  />
                <View style={styles.itemInfo}>
                    <Text style={styles.itemCategory}>{item.category}</Text>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <View style={styles.itemSourceInfo}>
                        <Image source={{uri:item.source_icon}} style={styles.itemSourceImg} />
                        <Text style={styles.itemSourceName}>{item.source_name}</Text>
                    </View>
                </View>

            </TouchableOpacity>
        )})
        
      )}
    </View>
  );
};

export default NewsList;
