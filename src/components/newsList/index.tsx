import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {vh, vw} from '../../utils/dimensions';
import Loading from '../loading';
import {fallback, images} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import { colors } from '../../utils/colors';

const NewsList = ({newsList}) => {
  const Navigation = useNavigation();
  const gotoDetail = item => {
    Navigation.navigate('Detail', {item});
  };

  return (
    <View style={styles.container}>
      {newsList.length == 0 ? (
        <Loading />
      ) : (
        newsList.map((item,index)=>{
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

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: vw(15),
    paddingVertical: vh(20),
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: vh(10),
    marginBottom: vh(20),
  },
  itemImg: {
    height: vw(110),
    width: vw(100),
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



