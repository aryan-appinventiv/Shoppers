import {
  Image,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {images} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import OTP from '../OTP';
import Header from '../../components/header';
import Button from '../../components/button';
import styles from './styles';

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

