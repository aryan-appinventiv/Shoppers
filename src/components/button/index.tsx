import { Text, TouchableOpacity} from 'react-native'
import React from 'react'
import styles from './styles'

const Button = ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.register}>
       <Text style={styles.registerTitle}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

