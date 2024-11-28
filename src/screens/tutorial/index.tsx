import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { images } from '../../assets'
import {Wwidth, Wheight, vw, vh} from '../../utils/dimensions'
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../../utils/colors'

const Tutorial = () => {
    const Navigation = useNavigation();
    const gotoLogin=()=>{
       Navigation.replace('LoginMenu');
    }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.tutorial}
        style={styles.tutorial}
        resizeMode='cover'
      >
        <View style={styles.wrapper}>
            <Animated.Text style={styles.title} entering={FadeInRight.delay(300).duration(500)} >Stay Updated!</Animated.Text>
            <Animated.Text style={styles.desc} entering={FadeInRight.delay(700).duration(500)}>Get breaking news and personalized updated directly to your feed.</Animated.Text>
            <Animated.View entering={FadeInDown.delay(1200).duration(500)}>
                <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={gotoLogin} >
                    <Text style={styles.btntxt}>
                    Go to Home Screen
                    </Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Tutorial

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    tutorial:{
        flex:1,
    },
    wrapper:{
        flex:1,
        backgroundColor: colors.modalBackground,
        justifyContent:'flex-end',
        gap:vh(10),
        paddingBottom: vh(50),
        paddingHorizontal:Wwidth/20,
    },
    title:{
        color: colors.white,
        fontSize:vw(24),
        fontWeight:'600',
        letterSpacing:1.5,
        lineHeight:36,
        textAlign:'center',
    },
    desc:{
        color: colors.white,
        fontWeight:'500',
        fontSize:vw(16),
        letterSpacing:1.2,
        lineHeight:22,
        textAlign:'center',
    },
    btn:{
        backgroundColor:colors.primary,
        paddingVertical:15,
        marginVertical:vh(20),
        alignItems:'center',
        borderRadius:10,
    },
    btntxt:{
        color: colors.white,
        fontSize:vw(16),
        fontWeight:'600',
    }
})