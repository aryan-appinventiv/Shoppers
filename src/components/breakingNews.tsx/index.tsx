// import { FlatList, StyleSheet, Text, View } from 'react-native'
// import React, { useState } from 'react'
// import SliderItem from '../sliderItem';
// import {vw, vh} from '../../utils/dimensions';

// const BreakingNews = ({newsList}) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Breaking News</Text>
//       <View style={styles.slideWrapper}>
//         <FlatList
//           data={newsList}
//           keyExtractor={({_, index})=> `list_item${index}`}
//           renderItem={({item,index})=>(
//             <SliderItem slideItem={item} index={index} />
//           )}
//           horizontal={true}
//           showsHorizontalScrollIndicator={false}
//           bounces={false}
//         />
//       </View>
//     </View>
//   )
// }

// export default BreakingNews

// const styles = StyleSheet.create({
//     slideWrapper:{
//         justifyContent:'center',
//         alignItems:'center',
//     },
//     container:{
//        paddingHorizontal: vw(15),
//     },
//     title:{
//         fontSize: vw(16),
//         fontWeight:'600',
//         letterSpacing: 1.2,
//         padding: vw(5),
//         marginBottom: vh(5),
//     },
// })

import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useRef, useEffect, useState } from 'react';
import SliderItem from '../sliderItem';
import { vw, vh } from '../../utils/dimensions';

const BreakingNews = ({ newsList }) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = prevIndex + 1 < newsList.length ? prevIndex + 1 : 0; 
        flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
        return nextIndex;
      });
    }, 3000); 

    return () => clearInterval(interval); 
  }, [newsList.length]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Breaking News</Text>
      <View style={styles.slideWrapper}>
        <FlatList
          ref={flatListRef}
          data={newsList}
          keyExtractor={(item, index) => `list_item${index}`}
          renderItem={({ item, index }) => <SliderItem slideItem={item} index={index} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onScrollToIndexFailed={(info) => {
            flatListRef.current?.scrollToOffset({ offset: info.averageItemLength * info.index, animated: true });
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

const styles = StyleSheet.create({
  slideWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: vw(15),
  },
  title: {
    fontSize: vw(16),
    fontWeight: '600',
    letterSpacing: 1.2,
    padding: vw(5),
    marginBottom: vh(5),
  },
  dotsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vh(10),
  },
  dot: {
    width: vw(8),
    height: vw(8),
    borderRadius: vw(4),
    backgroundColor: 'lightgray',
    marginHorizontal: vw(2),
  },
  activeDot: {
    backgroundColor: 'black', 
  },
});
