import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'

const Loading = () => {
  return (
    <View style={styles.container}>
        <ActivityIndicator size={'large'} color={colors.primary}/>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
})