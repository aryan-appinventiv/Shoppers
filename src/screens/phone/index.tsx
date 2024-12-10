import React, { useState, useEffect } from 'react';
import { Image, Text, TextInput, View, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ActivityIndicator } from 'react-native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import OTP from '../OTP';
import Header from '../../components/header';
import Button from '../../components/button';
import { images } from '../../assets';
import { strings } from '../../utils/strings';
import styles from './styles';
import Loading from '../../components/loading';
import { colors } from '../../utils/colors';

const Phone: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [confirm, setConfirm] = useState<FirebaseAuthTypes.ConfirmationResult | null>(null);
  const [number, setNumber] = useState<string>('+44 7444 555666');
  const navigation = useNavigation();

  const signInWithPhoneNumber = async (phoneNumber: string) => {
    try {
      setIsLoading(true);
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
      setIsLoading(false);
    } catch (error) {
      console.error('Phone sign-in error:', error);
      setIsLoading(false);
    }
  };

  const goBack = () => {
    navigation.goBack();
  };

  const onSubmit = () => signInWithPhoneNumber(number);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 0}
    >
      <Header onPress={goBack} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
            {isLoading ? (<ActivityIndicator size={'large'} color={colors.primary}/>):(<Button onPress={onSubmit} title={strings.send_OTP} />)}
          </>
        )}
      </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Phone;