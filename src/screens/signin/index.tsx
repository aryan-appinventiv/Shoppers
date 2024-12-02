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
import { vh } from '../../utils/dimensions';

  const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const Navigation = useNavigation();
    const validateLogin = () =>{
       let flag = true;
       if(password.trim().length<6){
        setPasswordError('Please Enter Password with 6 or more characters');
        flag = false;
       }
       const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       if (!email.trim()) {
        setEmailError('Email cannot be empty');
        flag = false;
       } else if(!emailPattern.test(email)){
        setEmailError('Please Enter Valid Email');
        flag = false;
       }
      
       if(flag){
        setEmailError('');
        setPasswordError('');
        onLogin();
       }
    }
  
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
          Toast.show('Email or Password does not match!', Toast.SHORT, {
            backgroundColor: colors.red,
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
              onChangeText={text => {
                setEmail(text);
                setEmailError(''); 
              }}
              placeholder="Email Address"
              autoCapitalize="none"
              style={styles.textInput}
            />
          </View>
          {emailError && emailError.length>0 && (<Text style={styles.error}>{emailError}</Text>)}
  
          <View style={styles.inputBox}>
            <Image source={images.password} style={styles.icon} />
            <TextInput
              value={password}
             onChangeText={text => {
              setPassword(text);
              setPasswordError(''); 
            }}
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
          {passwordError && passwordError.length>0 && (<Text style={styles.error}>{passwordError}</Text>)}

          <Button onPress={validateLogin} title={"Login"}/>

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
    },
    error:{
      color: colors.red,
      marginBottom: vh(10),
    }
   
  });
  
  







