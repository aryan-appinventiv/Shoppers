import {
    Alert,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {useState} from 'react';
  import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
  
  const Logout = () => {
      const Navigation = useNavigation();
    const onLogout = () => {
      auth().signOut().then(response=>{
        Alert.alert("User Signed out");
        console.log(("User signed out"));
        Navigation.reset({
          index: 0,
          routes: [{ name: 'Signin' }]
     })        
      }).catch(error=>{
        Alert.alert("Cannot logout");
        console.log(error);
      })
    };
    return (
      <View style={styles.container}>
        <Text style={styles.signup}>Logout Screen</Text>
        <TouchableOpacity onPress={onLogout} style={styles.register}>
          <Text style={styles.registerTitle}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default Logout;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    signup: {
      fontSize: 20,
      fontWeight: '500',
      textAlign: 'center',
    },
   
    register: {
      backgroundColor: 'orange',
      marginTop: 20,
      borderRadius: 5,
      width: '80%',
    },
    registerTitle: {
      color: 'white',
      fontSize: 15,
      fontWeight: '600',
      paddingVertical: 10,
      paddingHorizontal: 20,
      textAlign: 'center',
    },
  });
  