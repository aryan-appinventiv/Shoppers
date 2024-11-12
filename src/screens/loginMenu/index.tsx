import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import Google from '../google';
import Phone from '../phone';
import ForgotPassword from '../forgotPassword';
import {images} from '../../assets';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../utils/colors';
import LoginTouchable from '../../components/loginTouchables';
import Animated, { FadeInDown, FadeInLeft, FadeInRight } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { onGoogleButtonPress } from '../google';

const LoginMenu = () => {
  const Navigation = useNavigation();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const onLogin = () => {
  //   auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .then(response => {
  //       console.log(response);
  //       Alert.alert('User Logged in');
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       Alert.alert('Problem in login');
  //     });
  // };
  const gotoGoogle=async()=>{
    try {
      await onGoogleButtonPress();
      Alert.alert("Signed in with Google!");
      Navigation.navigate(''); 
    } catch (error) {
      Alert.alert("Google Sign-In Failed", error.message);
    }
  }
  const gotoMail=()=>{
    Navigation.navigate('RegisterWithEmail')
  }
  const gotoPhone=()=>{
    Navigation.navigate('Phone')
  }
  const gotoSignin=()=>{
    Navigation.navigate('Signin')
  }
  return (
    <>
      <ImageBackground
        source={images.tutorial}
        style={styles.container}
        resizeMode="cover">
        <View style={styles.wrapper}>
          <LinearGradient
            colors={[
              'transparent',
              'rgba(255,255,255,0.9)',
              'rgba(255,255,255,1)',
            ]}
            style={styles.background}>
            <View style={styles.insideContainer}>
              <Animated.Text entering={FadeInRight.delay(100).duration(500)} style={styles.title}>NEWS</Animated.Text>
              <Animated.Text entering={FadeInLeft.delay(200).duration(500)} style={styles.desc}>North-East-West-South</Animated.Text>
              <Animated.View entering={FadeInDown.delay(300).duration(500)} style={styles.animatedView}>
              <LoginTouchable title="Continue with Email" img={images.mail} onPress= {gotoMail}/>
              </Animated.View>
              <Animated.View entering={FadeInDown.delay(700).duration(500)} style={styles.animatedView}>
              <LoginTouchable title="Continue with Google" img={images.google} onPress = {gotoGoogle}/>
              </Animated.View>
              <Animated.View entering={FadeInDown.delay(1100).duration(500)} style={styles.animatedView}>
              <LoginTouchable title="Continue with Phone" img={images.otp} onPress={gotoPhone}/>
              </Animated.View>

              <Animated.View style={styles.alreadyAcc} entering={FadeInDown.delay(1300).duration(500)}>
                <Text style={styles.alreadyAccText1}>Already have an account?</Text>
                <TouchableOpacity onPress={gotoSignin}>
                <Text style={styles.alreadyAccText2}>Signin</Text>
                </TouchableOpacity>
              </Animated.View>
              {/* <TextInput
                value={email}
                onChangeText={text => setEmail(text)}
                placeholder="Email"
                style={styles.inputBox}
                autoCapitalize="none"
              />
              <TextInput
                value={password}
                onChangeText={text => setPassword(text)}
                placeholder="Password"
                style={styles.inputBox}
                autoCapitalize="none"
              /> */}
              {/* <TouchableOpacity onPress={onLogin} style={styles.register}>
                <Text style={styles.registerTitle}>Login</Text>
              </TouchableOpacity> */}
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
    </>
  );
};

export default LoginMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
  },
 
  background: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'flex-end',
  },
  insideContainer: {
    flex:1,
    alignItems:'center',
    justifyContent:'flex-end',
    paddingBottom:50,
    paddingHorizontal:20,
  },
  title:{
    color: colors.primary,
    fontSize:25,
    fontWeight:'700',
    letterSpacing:2.4,
    lineHeight:25,
  },
  desc:{
    color:'gray',
    letterSpacing:2,
    fontWeight:'600',
    marginVertical:20,
    fontSize:15,
  },
  alreadyAcc:{
    flexDirection:'row',
    gap:5,
    paddingTop:30
  },
  alreadyAccText1:{
    color:'gray',
    fontWeight:'500',
  },
  alreadyAccText2:{
    color:'purple',
    fontWeight:'600',
  },
  animatedView:{
    width:'100%',
  }
});
