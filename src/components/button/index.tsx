import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'

const Button = ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.register}>
       <Text style={styles.registerTitle}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    register: {
        backgroundColor: colors.primary,
        width: '100%',
        padding: 15,
        alignItems: 'center',
        marginVertical: 30,
        borderRadius: 10,
    },
    registerTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
})