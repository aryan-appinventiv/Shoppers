// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';
// import { useRoute } from '@react-navigation/native';
// import { vh, vw } from '../../utils/dimensions';

// const Detail = () => {
//   const route = useRoute();
//   const { item } = route.params;

//   return (
//     <View style={styles.container}>
//       {/* Display the item's details */}
//       <Image source={{ uri: item.image_url }} style={styles.image} />
//       <Text style={styles.title}>{item.title}</Text>
//       <Text style={styles.category}>{item.category}</Text>
//       <Text style={styles.source}>Source: {item.source_name}</Text>
//       <Text style={styles.desc}>{item.description}</Text>
//       <View>
//         <Text style={styles.keyword}>Keywords : </Text>
//         {item.keywords.map((keyword,index)=>(
//            <Text key={index} style={styles.keywords}>{keyword}</Text>
//         ))}

//       </View>

//     </View>
//   );
// };

// export default Detail;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: vw(16),
//   },
//   image: {
//     width: '100%',
//     height: vh(200),
//     borderRadius: vw(10),
//     marginBottom: vh(20),
//   },
//   title: {
//     fontSize: vw(20),
//     fontWeight: 'bold',
//     marginBottom: vh(10),
//   },
//   category: {
//     fontSize: vw(16),
//     color: 'gray',
//     marginBottom: vh(10),
//   },
//   source: {
//     fontSize: vw(14),
//     color: 'gray',
//   },
//   desc:{
//     fontSize: vw(15),
//     color:'#708090',
//     letterSpacing:1.2,
//     textAlign:'justify',
//     marginVertical: vh(10),
//   },
// });

import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {vh, vw} from '../../utils/dimensions';
import {images} from '../../assets';

const Detail = () => {
  const route = useRoute();
  const {item} = route.params;
  const Navigation = useNavigation();

  const goback = () => {
    Navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goback}>
          <Image source={images.goback} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={images.like} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
      <Image
        source={{uri: item.image_url}}
        style={styles.image}
        resizeMode="stretch"
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.category}>{item.category}</Text>
      <View style={styles.sourceCont}>
        <Text style={styles.source}>Source: </Text>
        <Image source={{uri: item.source_icon}} style={styles.sourceIcon} />
        <Text style={styles.source}>{item.source_name}</Text>
      </View>
      <Text style={styles.desc}>{item.description}</Text>
      <Text style={styles.desc}>Tempor reprehenderit duis quis excepteur aliquip ut id exercitation consectetur. Culpa ex est non cillum. Proident quis dolor ullamco nulla ex in cillum. Nulla magna incididunt in et minim proident ea. Ut elit adipisicing sunt velit. Irure anim quis aute aliquip dolor elit voluptate. Est laborum exercitation officia dolore.

Velit velit Lorem veniam nulla. Reprehenderit ad aliqua in incididunt occaecat ut aliqua. Mollit dolor ad pariatur enim. Excepteur veniam mollit pariatur veniam. Quis sunt in enim commodo proident tempor exercitation excepteur est. Occaecat id veniam est officia laboris. Nostrud officia proident laboris reprehenderit excepteur qui eiusmod aliquip.

Sint ad anim ex anim mollit. Veniam sunt aliqua fugiat est enim. Ipsum officia commodo magna commodo id eiusmod. Anim quis pariatur cupidatat proident irure dolor ad eu. Laborum est veniam officia ipsum. Culpa eu est officia eiusmod nostrud exercitation anim sint. Est velit aliqua sint aute enim reprehenderit.</Text>


      <View style={styles.viewCont}>
        <Text style={styles.keyword}>Keywords: </Text>

        {item.keywords && item.keywords.length > 0 ? (
          item.keywords.map((keyword, index) => (
            <Text key={index} style={styles.keywords}>
              {keyword}
              {index < item.keywords.length - 1 ? ', ' : ''}
            </Text>
          ))
        ) : (
          <Text style={styles.keywords}>No keywords available</Text>
        )}
      </View>

      <View style={styles.viewCont}>
        <Text style={styles.keyword}>Published on: </Text>
        <Text style={styles.keywords}>{item.pubDate}, </Text>
      </View>
      </ScrollView>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: vw(16),
  },
  content:{
    marginBottom: vh(20),
  },
  image: {
    width: '100%',
    height: vh(200),
    borderRadius: vw(10),
    marginVertical: vh(20),
  },
  title: {
    fontSize: vw(20),
    fontWeight: 'bold',
    marginBottom: vh(10),
  },
  category: {
    fontSize: vw(16),
    color: 'gray',
    marginBottom: vh(10),
  },
  source: {
    fontSize: vw(14),
    color: 'gray',
  },
  desc: {
    fontSize: vw(15),
    color: '#708090',
    letterSpacing: 1.2,
    textAlign: 'justify',
    marginVertical: vh(10),
    fontWeight: '600',
  },
  keyword: {
    fontSize: vw(14),
    fontWeight: '600',
  },
  keywords: {
    fontSize: vw(14),
    color: 'gray',
  },
  viewCont: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  sourceIcon: {
    height: vw(25),
    width: vw(25),
    borderRadius: vw(15),
  },
  sourceCont: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: vw(3),
  },
  icon: {
    width: vw(20),
    height: vw(20),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'ios' ? vh(60) : vh(10),
    paddingBottom: vh(10),
    paddingHorizontal: vw(5),
  },
});
