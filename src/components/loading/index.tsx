import { ActivityIndicator, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'
import styles from './styles'

const Loading = () => {
  return (
    <View style={styles.container}>
        <ActivityIndicator size={'large'} color={colors.primary}/>
    </View>
  )
}

export default Loading

