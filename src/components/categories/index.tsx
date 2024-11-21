import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {vw, vh} from '../../utils/dimensions';
import newsCategoryList from '../../constants/Categories';
import { colors } from '../../utils/colors';

const Categories = ({onCategoryChanged}) => {
  const scrollRef = useRef(null);
  const itemRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSelectCategory =(index: number)=>{
    const selected = itemRef.current[index]
    setActiveIndex(index);
    selected?.measure((x)=>{
        scrollRef.current?.scrollTo({x:x, y:0, animated:true});
    });

    onCategoryChanged(newsCategoryList[index].slug);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trending Right Now</Text>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.itemsWrapper}>
        {newsCategoryList.map((item, index) => (
          <TouchableOpacity 
          key={index} 
          style={[styles.item, activeIndex===index && styles.itemActive]} 
          ref={(el)=>(itemRef.current[index]=el)}
          onPress={()=>handleSelectCategory(index)}
           >
            <Text style={[styles.itemText,activeIndex===index && styles.itemTextActive]}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: vw(15),
  },
  title: {
    fontSize: vw(16),
    fontWeight: '600',
    letterSpacing: 1.2,
    padding: vw(5),
    marginVertical: vh(10),
  },
  itemsWrapper: {
    gap: 20,
  },
  item: {
    borderWidth: 1,
    borderColor: 'darkgray',
    paddingVertical: vh(10),
    paddingHorizontal: vw(16),
    borderRadius: vw(10),
  },
  itemText: {
    color: 'gray',
    letterSpacing: 0.5,
  },
  itemActive:{
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  itemTextActive:{
    fontWeight: '600',
    color: 'white',
  }
});
