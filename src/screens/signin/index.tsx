import {
    Alert,
    Image,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, { useState } from 'react';
  import auth from '@react-native-firebase/auth';
  import { images } from '../../assets';
  import { colors } from '../../utils/colors';
  import { useNavigation } from '@react-navigation/native';
  import Header from '../../components/header';
  import Button from '../../components/button';
  import Toast from 'react-native-simple-toast';

  const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const Navigation = useNavigation();
  
    const onLogin = () => {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(response => {
          const user = response.user;
          
          if (user.emailVerified) {
            console.log('User is verified');
       
            Toast.show('User Logged in', Toast.SHORT, {
              backgroundColor: colors.green,
            });
            Navigation.navigate('BottomTabNavigator');
          } else {
            Alert.alert(
              'Email not verified',
              'Please verify your email before logging in. Check your inbox for the verification link.',
              [
                { text: 'Resend Email', onPress: () => user.sendEmailVerification() },
                { text: 'OK' }
              ]
            );
            
            auth().signOut();
          }
        })
        .catch(error => {
          console.log(error);
          Toast.show('Problem in login', Toast.SHORT, {
            backgroundColor: colors.primary,
          });
        });
    };
    const goBack=()=>{
      Navigation.goBack();
    }

    const gotoForgot=()=>{
      Navigation.navigate('ForgotPassword');
    };
  
    return (
      <View style={styles.Container}>
        <Header onPress={goBack}/>
        <View style={styles.secondCont}>
          <Text style={styles.heading}>Login</Text>
          
          <View style={styles.inputBox}>
            <Image source={images.mail} style={styles.icon} />
            <TextInput
              value={email}
              onChangeText={text => setEmail(text)}
              placeholder="Email Address"
              autoCapitalize="none"
              style={styles.textInput}
            />
          </View>
  
          <View style={styles.inputBox}>
            <Image source={images.password} style={styles.icon} />
            <TextInput
              value={password}
              onChangeText={text => setPassword(text)}
              placeholder="Password"
              autoCapitalize="none"
              secureTextEntry={!passwordVisible}
              style={styles.textInput}
            />
            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
              <Image
                source={passwordVisible ? images.hide : images.view}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>

          <Button onPress={onLogin} title={"Login"}/>

          <TouchableOpacity style={styles.forgotCont} onPress={gotoForgot}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default Signin;
  
  const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: colors.white,
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
      backgroundColor: colors.white,
      borderColor: colors.lightgray,
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
    },
    forgotCont:{
      alignSelf:'flex-end',
    },
    forgotText:{
      fontWeight: '600'
    }
   
  });
  
  