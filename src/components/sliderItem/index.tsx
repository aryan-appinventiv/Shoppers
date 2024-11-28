import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Wwidth, vw, vh } from '../../utils/dimensions'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../../utils/colors'


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

export default SliderItem

const styles = StyleSheet.create({
    itemWrapper:{
        width:Wwidth,
    },
    image:{
        width: Wwidth-40,
        height:Wwidth/2,
        borderRadius:vw(20),
    },
    title:{
        color:colors.white,
        fontSize:17,
        fontWeight:'700',
        marginHorizontal: vw(8),
    },
    background:{
        position:'absolute',
        top:0,
        borderRadius:20,
        width: Wwidth-40,
        height: Wwidth/2,
    },
    sourceIcon:{
        width: vw(25),
        height: vw(25),
        borderRadius: vw(20),
    },
    sourceInfo:{
        flexDirection:'row',
        paddingHorizontal:vw(20),
        alignItems:'center',
        gap: vw(10),
    },
    sourceName:{
        color: colors.white,
        fontSize: vw(13),
        fontWeight: '600',
    },
    sourceCont:{
        flex:1,
        justifyContent:'flex-end',
        paddingBottom: vh(20),
        gap:vh(10),
    }
})