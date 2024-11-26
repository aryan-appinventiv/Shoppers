import { StyleSheet, Text, View, TouchableOpacity, Image, Platform, Dimensions } from 'react-native'
import React from 'react'
import { images } from '../../assets'
import { useNavigation } from '@react-navigation/native'

const Wwidth = Dimensions.get('window').width;
const Header = ({onPress}) => {
    const Navigation = useNavigation();
   
  return (
      <View style={styles.firstCont}>
        <Image source={images.tutorial} resizeMode='cover' style={styles.bcImg}/>
        <TouchableOpacity style={styles.backCont} onPress={onPress}>
        <Image source={images.back} style={styles.back} />
        </TouchableOpacity>
        </View>
  )
}

export default Header

const styles = StyleSheet.create({
    firstCont: {
        flex: 1,
      },
      bcImg:{
        width:'100%',
        flex:1
    },
    back:{
        height:25,
        width:25,
    },
    backCont:{
        position:'absolute',
        top:Platform.OS==="ios"?50:20,
        left:20,
    },
})