import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'

const SliderItem = ({slideItem, index}) => {
    const Navigation = useNavigation();
    const gotoDetail=(item)=>{
        Navigation.navigate('Detail',{item});
    }
  return (
    <TouchableOpacity style={styles.itemWrapper} onPress={()=>gotoDetail(slideItem)}>
      <Image source={{uri: slideItem.image_url}} style={styles.image}/>
      <LinearGradient colors ={['transparent','rgba(0,0,0,0.8)']} style={styles.background}>
        <View style={styles.sourceCont}>
            <View style={styles.sourceInfo}>
                {slideItem.source_icon && (
                    <Image source={{uri:slideItem.source_icon}} style={styles.sourceIcon} />
                )}
                <Text style={styles.sourceName}>{slideItem.source_name}</Text>
            </View>
            <Text style={styles.title}>{slideItem.title}</Text>
        </View>
      </LinearGradient>
      
    </TouchableOpacity>
  )
}

export default SliderItem;

