import React, {useState} from 'react';
import {View, TextInput, Text, Image, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import Header from '../../components/header';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../utils/colors';
import {images} from '../../assets';
import Toast from 'react-native-simple-toast';
import {strings} from '../../utils/strings';
import styles from './styles';
import {RootStackParamList} from '../../navigators';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type NavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'ForgotPassword'
>;
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, seterror] = useState('');

  const Navigation = useNavigation<NavigationProps>();

  const handlePasswordReset = async () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      seterror(strings.login_email_error1);
    } else if (!emailPattern.test(email)) {
      seterror(strings.login_email_error2);
    }

    setLoading(true);
    try {
      await auth().sendPasswordResetEmail(email);
      Toast.show(strings.reset_email_send, Toast.LONG, {
        backgroundColor: colors.green,
      });
      setEmail('');
      Navigation.navigate('Signin');
    } catch (error: any) {
      Toast.show(error.message, Toast.SHORT, {
        backgroundColor: colors.red,
      });
    } finally {
      setLoading(false);
    }
  };
  const goBack = () => {
    Navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Header onPress={goBack} />
      <View style={styles.secondCont}>
        <Text style={styles.title}>{strings.reset_password}</Text>
        <Text style={styles.desc}>{strings.reset_pass_link_send}</Text>
        <View style={styles.inputBox}>
          <Image source={images.mail} style={styles.icon} />
          <TextInput
            value={email}
            onChangeText={text => {
              setEmail(text), seterror('');
            }}
            placeholder={strings.email_address}
            autoCapitalize="none"
            style={styles.textInput}
            autoFocus={true}
          />
        </View>
        {error && <Text style={styles.error}>{error}</Text>}
        <TouchableOpacity
          onPress={handlePasswordReset}
          style={styles.register}
          disabled={loading}>
          <Text style={styles.registerTitle}>
            {loading ? strings.sending : strings.send_password_reset_email}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPassword;
