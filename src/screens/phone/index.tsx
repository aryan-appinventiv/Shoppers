// import { StyleSheet, Text, View, Button } from 'react-native'
// import React, { useState } from 'react'
// import auth from '@react-native-firebase/auth'
// import OTP from '../OTP';

// const Phone = () => {
//     const [confirm, setConfirm] = useState(null);
//     React.useEffect(() => {
//       console.log("confirm", confirm);
//   }, [confirm]);

//   async function signInWithPhoneNumber(phoneNumber) {
//     try {
//         const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
//         setConfirm(confirmation);
//     } catch (error) {
//         console.error("Phone sign-in error:", error);
//     }
// }

//   return (
//     <View>
//         {confirm? <OTP confirm={confirm}/> : <Button
//         title="Phone Number Sign In"
//         onPress={() => signInWithPhoneNumber('+44 7444 555666')}
//       />}
//     </View>
//   )
// }

// export default Phone

import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {images} from '../../assets';
import {colors} from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';
import OTP from '../OTP';
import Header from '../../components/header';
import Button from '../../components/button';

const Phone = () => {
  const [confirm, setConfirm] = useState(null);
  const [number, setNumber] = useState('+44 7444 555666');
  const Navigation = useNavigation();
  React.useEffect(() => {
    console.log('confirm', confirm);
  }, [confirm]);

  async function signInWithPhoneNumber(phoneNumber) {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (error) {
      console.error('Phone sign-in error:', error);
    }
  }

 
  const goBack = () => {
    Navigation.goBack();
  };
  const onSubmit = () => signInWithPhoneNumber(number);

  return (
    <View style={styles.Container}>
      <Header onPress={goBack} />
      <View style={styles.secondCont}>
        <Text style={styles.heading}>Create an Account</Text>
        {confirm ? (
          <OTP confirm={confirm} />
        ) : (
          <>
          <View style={styles.inputBox}>
            <Image source={images.otp} style={styles.icon} />
            <TextInput
              value={number}
              onChangeText={text => setNumber(text)}
              placeholder="Phone Number"
              autoCapitalize="none"
              style={styles.textInput}
              keyboardType="decimal-pad"
            />
          </View>
  
        <Button onPress={onSubmit} title={"Send OTP"}/>
        </>
        )}
      </View>
    </View>
  );
};

export default Phone;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  secondCont: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  inputBox: {
    width: '100%',
    borderRadius: 5,
    marginVertical: 10,
    borderBottomWidth: 1,
    paddingVertical: Platform.OS === 'ios' ? 10 : 0,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderColor: 'lightgray',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  heading: {
    color: colors.primary,
    fontSize: 25,
    fontWeight: '700',
    letterSpacing: 1.8,
    lineHeight: 25,
    marginBottom: 50,
  },

  icon: {
    height: 20,
    width: 20,
  },
  textInput: {
    flex: 1,
    paddingRight: 25,
    fontSize:18,
  },
});
