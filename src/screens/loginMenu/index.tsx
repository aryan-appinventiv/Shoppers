import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {images} from '../../assets';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../utils/colors';
import LoginTouchable from '../../components/loginTouchables';
import Animated, { FadeInDown, FadeInLeft, FadeInRight } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { onGoogleButtonPress } from '../google';
import Toast from 'react-native-simple-toast';
import { strings } from '../../utils/strings';

const LoginMenu = () => {
  const Navigation = useNavigation();
  const gotoGoogle=async()=>{
    try {
      await onGoogleButtonPress();
      Toast.show(strings.signin_with_google, Toast.SHORT, {
        backgroundColor: colors.green,
      });
      Navigation.navigate('BottomTabNavigator'); 
    } catch (error: any) {
      console.log(strings.google_signin_failed, error.message);
      Toast.show(strings.google_signin_failed, Toast.SHORT, {
        backgroundColor: colors.red,
      });
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
              <Animated.Text entering={FadeInRight.delay(100).duration(500)} style={styles.title}>{strings.news}</Animated.Text>
              <Animated.Text entering={FadeInLeft.delay(200).duration(500)} style={styles.desc}>{strings.n_e_w_s}</Animated.Text>
              <Animated.View entering={FadeInDown.delay(300).duration(500)} style={styles.animatedView}>
              <LoginTouchable title={strings.continue_with_email} img={images.mail} onPress= {gotoMail}/>
              </Animated.View>
              <Animated.View entering={FadeInDown.delay(700).duration(500)} style={styles.animatedView}>
              <LoginTouchable title={strings.continue_with_google} img={images.google} onPress = {gotoGoogle}/>
              </Animated.View>
              <Animated.View entering={FadeInDown.delay(1100).duration(500)} style={styles.animatedView}>
              <LoginTouchable title={strings.continue_with_phone} img={images.otp} onPress={gotoPhone}/>
              </Animated.View>

              <Animated.View style={styles.alreadyAcc} entering={FadeInDown.delay(1300).duration(500)}>
                <Text style={styles.alreadyAccText1}>{strings.already_have_account}</Text>
                <TouchableOpacity onPress={gotoSignin}>
                <Text style={styles.alreadyAccText2}>{strings.signin}</Text>
                </TouchableOpacity>
              </Animated.View>
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
    color: colors.gray,
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
    color: colors.gray,
    fontWeight:'500',
  },
  alreadyAccText2:{
    color:colors.purple,
    fontWeight:'600',
  },
  animatedView:{
    width:'100%',
  }
});
