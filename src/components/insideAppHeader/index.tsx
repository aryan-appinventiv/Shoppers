import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { images } from '../../assets'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from './styles'
import { vh } from '../../utils/dimensions'

const InsideAppHeader = ({title, onPress}:{title: string, onPress: ()=>void}) => {
    const {top: safeTop} = useSafeAreaInsets();
  return (
    <View style={[styles.backCont, {paddingTop: safeTop + vh(20)}]}>
        <TouchableOpacity style={styles.back} onPress={onPress}>
          <Image source={images.back} style={styles.backImg} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        </View>
  )
}

export default InsideAppHeader
