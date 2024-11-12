// import {
//     Alert,
//     Image,
//     Platform,
//     StyleSheet,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     View,
//   } from 'react-native';
//   import React, { useState } from 'react';
//   import auth from '@react-native-firebase/auth';
//   import { images } from '../../assets';
//   import { colors } from '../../utils/colors';
//   import Animated, { FadeInLeft, FadeInRight, FadeInUp } from 'react-native-reanimated';
  
//   const Signin = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [passwordVisible, setPasswordVisible] = useState(false);
  
//     const onLogin = () => {
//     auth()
//       .signInWithEmailAndPassword(email, password)
//       .then(response => {
//         console.log(response);
//         Alert.alert('User Logged in');
//       })
//       .catch(error => {
//         console.log(error);
//         Alert.alert('Problem in login');
//       });
//   };
  
//     return (
//       <View style={styles.Container}>
//         <Animated.View style={styles.firstCont} entering={FadeInUp.delay(200).duration(500)}>
//           <Animated.Text entering={FadeInRight.delay(500).duration(500)} style={styles.title}>
//             NEWS
//           </Animated.Text>
//           <Animated.Text entering={FadeInLeft.delay(600).duration(500)} style={styles.desc}>
//             North-East-West-South
//           </Animated.Text>
//         </Animated.View>
//         <View style={styles.secondCont}>
//           <Text style={styles.heading}>Login</Text>
          
//           <View style={styles.inputBox}>
//             <Image source={images.mail} style={styles.icon} />
//             <TextInput
//               value={email}
//               onChangeText={text => setEmail(text)}
//               placeholder="Email Address"
//               autoCapitalize="none"
//               style={styles.textInput}
//             />
//           </View>
  
//           <View style={styles.inputBox}>
//             <Image source={images.password} style={styles.icon} />
//             <TextInput
//               value={password}
//               onChangeText={text => setPassword(text)}
//               placeholder="Password"
//               autoCapitalize="none"
//               secureTextEntry={!passwordVisible}
//               style={styles.textInput}
//             />
//             <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
//             <Image
//                 source={passwordVisible ? images.hide : images.view}
//                 style={styles.icon}
//               />
//             </TouchableOpacity>
//           </View>
  
  
//           <TouchableOpacity onPress={onLogin} style={styles.login}>
//             <Text style={styles.loginTitle}>Login</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   };
  
//   export default Signin;
  
//   const styles = StyleSheet.create({
//     Container: {
//       flex: 1,
//       backgroundColor: 'white',
//     },
//     firstCont: {
//       flex: 1,
//       backgroundColor: colors.primary,
//       paddingTop: 50,
//       paddingHorizontal: 50,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     secondCont: {
//       flex: 4,
//       alignItems: 'center',
//       justifyContent: 'flex-start',
//       paddingVertical: 50,
//       paddingHorizontal: 20,
//     },
//     inputBox: {
//       width: '100%',
//       borderRadius: 5,
//       marginVertical: 10,
//       borderBottomWidth: 1,
//       paddingVertical: Platform.OS === 'ios' ? 10 : 0,
//       paddingHorizontal: 10,
//       backgroundColor: 'white',
//       borderColor: 'lightgray',
//       flexDirection: 'row',
//       alignItems: 'center',
//       gap: 10,
//     },
//     title: {
//       color: colors.white,
//       fontSize: 25,
//       fontWeight: '700',
//       letterSpacing: 2.7,
//       lineHeight: 25,
//     },
//     heading: {
//       color: colors.primary,
//       fontSize: 25,
//       fontWeight: '700',
//       letterSpacing: 1.8,
//       lineHeight: 25,
//       marginBottom: 50,
//     },
//     desc: {
//       color: 'gray',
//       letterSpacing: 2,
//       fontWeight: '600',
//       marginVertical: 20,
//       fontSize: 15,
//       textAlign: 'center',
//     },
//     icon: {
//       height: 20,
//       width: 20,
//     },
//     textInput: {
//       flex: 1,
//       paddingRight: 25,
//     },
//     login: {
//       backgroundColor: colors.primary,
//       width: '100%',
//       padding: 15,
//       alignItems: 'center',
//       marginVertical: 30,
//     },
//     loginTitle: {
//       color: 'white',
//       fontSize: 16,
//       fontWeight: '600',
//     },
//   });





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
            Alert.alert('User Logged in');
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
          Alert.alert('Problem in login');
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
    },
    forgotCont:{
      alignSelf:'flex-end',
    },
    forgotText:{
      fontWeight: '600'
    }
   
  });
  
  