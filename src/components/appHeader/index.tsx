import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import { images } from '../../assets'
import auth from '@react-native-firebase/auth'
import {vw, vh} from '../../utils/dimensions'

const AppHeader = () => {
    const [username, setUsername] = useState('');

    useEffect(() => {
      // Fetch the current user's displayName (username) from Firebase Auth
      const currentUser = auth().currentUser;
      if (currentUser) {
        setUsername(currentUser.displayName);
      }
    }, []);
  return (
    <View style={styles.userCont}>
        <View style={styles.userCont1}>
          <Image source={images.profile} style={styles.userImg} />
          <View >
            <Text style={styles.welcome}>Welcome</Text>
            <Text style={styles.name}>{username || 'User'}!</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Image source={images.bell} style={styles.logo} />
        </TouchableOpacity>
    </View>
  )
}

export default AppHeader

const styles = StyleSheet.create({
    userImg: {
        width: vw(60),
        height: vw(60),
      },
      userCont: {
        paddingTop: Platform.OS === 'ios' ? vh(50) : vh(7),
        paddingRight: vw(15),
        paddingLeft: vw(7),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      },
      logo: {
        width: vw(25),
        height: vw(25),
      },
      userCont1:{
        flexDirection:'row',
        alignItems:'center',
      },
      welcome:{
        color:'gray',
        fontWeight:'600',
      },
      name:{
        fontSize: vh(16),
        fontWeight:'700',
      },
})