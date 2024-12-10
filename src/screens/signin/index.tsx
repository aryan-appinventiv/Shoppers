import React, {useState} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {images} from '../../assets';
import {colors} from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/header';
import Button from '../../components/button';
import Toast from 'react-native-simple-toast';
import styles from './styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigators';
import {strings} from '../../utils/strings';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const Navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Signin'>>();

  const validateLogin = () => {
    let flag = true;
    if (password.trim().length < 6) {
      setPasswordError(strings.login_pass_error);
      flag = false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError(strings.login_email_error1);
      flag = false;
    } else if (!emailPattern.test(email)) {
      setEmailError(strings.login_email_error2);
      flag = false;
    }

    if (flag) {
      setEmailError('');
      setPasswordError('');
      onLogin();
    }
  };

  const onLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        setIsLoading(true);
        const user = response.user;

        if (user.emailVerified) {
          Toast.show(strings.log_in, Toast.SHORT, {
            backgroundColor: colors.green,
          });
          setIsLoading(false);
          Navigation.navigate('BottomTabNavigator');
        } else {
          setIsLoading(false);
          Alert.alert(strings.email_not_verified, strings.verify_email, [
            {
              text: strings.resend_email,
              onPress: () => user.sendEmailVerification(),
            },
            {text: strings.ok},
          ]);

          auth().signOut();
        }
      })
      .catch(error => {
        setIsLoading(false);
        console.log(error);
        Toast.show(strings.email_pass_not_matched, Toast.SHORT, {
          backgroundColor: colors.red,
        });
      });
  };

  const goBack = () => {
    Navigation.goBack();
  };

  const gotoForgot = () => {
    Navigation.navigate('ForgotPassword');
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoiding}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.Container}>
          <Header onPress={goBack} />
          <ScrollView
            style={styles.secondCont}
            showsVerticalScrollIndicator={false}>
            <Text style={styles.heading}>{strings.login}</Text>

            <View style={styles.inputBox}>
              <Image source={images.mail} style={styles.icon} />
              <TextInput
                value={email}
                onChangeText={text => {
                  setEmail(text);
                  setEmailError('');
                }}
                placeholder={strings.email_address}
                autoCapitalize="none"
                style={styles.textInput}
              />
            </View>
            {emailError && emailError.length > 0 && (
              <Text style={styles.error}>{emailError}</Text>
            )}

            <View style={styles.inputBox}>
              <Image source={images.password} style={styles.icon} />
              <TextInput
                value={password}
                onChangeText={text => {
                  setPassword(text);
                  setPasswordError('');
                }}
                placeholder={strings.password}
                autoCapitalize="none"
                secureTextEntry={!passwordVisible}
                style={styles.textInput}
              />
              <TouchableOpacity
                onPress={() => setPasswordVisible(!passwordVisible)}>
                <Image
                  source={passwordVisible ? images.hide : images.view}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
            {passwordError && passwordError.length > 0 && (
              <Text style={styles.error}>{passwordError}</Text>
            )}
            {isLoading? (<ActivityIndicator size={'large'} color={colors.primary} />):(<Button onPress={validateLogin} title={'Login'} />)}
            <TouchableOpacity style={styles.forgotCont} onPress={gotoForgot}>
              <Text style={styles.forgotText}>{strings.forgot_pass}</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Signin;
