import React, { useState, useEffect } from 'react';
import { Image, Text, TextInput, View, StyleSheet } from 'react-native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import OTP from '../OTP';
import Header from '../../components/header';
import Button from '../../components/button';
import { images } from '../../assets';
import { strings } from '../../utils/strings';

const Phone: React.FC = () => {
  const [confirm, setConfirm] = useState<FirebaseAuthTypes.ConfirmationResult | null>(null);
  const [number, setNumber] = useState<string>('+44 7444 555666');
  const navigation = useNavigation();

  useEffect(() => {
    console.log('confirm', confirm);
  }, [confirm]);

  const signInWithPhoneNumber = async (phoneNumber: string) => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (error) {
      console.error('Phone sign-in error:', error);
    }
  };

  const goBack = () => {
    navigation.goBack();
  };

  const onSubmit = () => signInWithPhoneNumber(number);

  return (
    <View style={styles.container}>
      <Header onPress={goBack} />
      <View style={styles.secondCont}>
        <Text style={styles.heading}>{strings.create_account}</Text>
        {confirm ? (
          <OTP confirm={confirm} />
        ) : (
          <>
            <View style={styles.inputBox}>
              <Image source={images.otp} style={styles.icon} />
              <TextInput
                value={number}
                onChangeText={(text) => setNumber(text)}
                placeholder="Phone Number"
                autoCapitalize="none"
                style={styles.textInput}
                keyboardType="phone-pad"
              />
            </View>
            <Button onPress={onSubmit} title={strings.send_OTP} />
          </>
        )}
      </View>
    </View>
  );
};

export default Phone;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  secondCont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
    height: 50,
    width: '80%',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
  },
});
