import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import newsCategoryList from '../../constants/Categories';
import styles from './styles';
import {useTheme} from '../../utils/ThemeContext';
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
  const {isDarkMode} = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.title,{color: isDarkMode? colors.white: colors.black}]}>Trending Right Now</Text>
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

