import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { images } from '../../assets'
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'
import styles from './styles';

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

