// import {
//   Alert,
//   Image,
//   KeyboardAvoidingView,
//   Platform,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, {useState} from 'react';
// import auth from '@react-native-firebase/auth';
// import {images} from '../../assets';
// import {colors} from '../../utils/colors';
// import {useNavigation} from '@react-navigation/native';
// import Header from '../../components/header';
// import Button from '../../components/button';
// import Toast from 'react-native-simple-toast';


// const RegisterWithEmail = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

//   const Navigation = useNavigation();

//   const onRegister = () => {
//     if (password !== confirmPassword) {
//       Alert.alert('Passwords do not match');
//       return;
//     }
//     if (!name) {
//       Alert.alert('Username cannot be null');
//       return;
//     }

//     auth()
//       .createUserWithEmailAndPassword(email, password)
//       .then(() => {
//         const user = auth().currentUser;
//         user
//           .updateProfile({
//             displayName: name,
//           })
//           .then(() => {
//             console.log('User account created and name updated');
//             user
//               .sendEmailVerification()
//               .then(() => {
//                 Toast.show('Verification email sent. Please check your inbox to verify your email before logging in.', Toast.LONG, {
//                   backgroundColor: colors.green,
//                 });
//               })
//               .catch(error => {
//                 console.error('Error sending verification email:', error);
//               });

//             setName('');
//             setEmail('');
//             setPassword('');
//             setConfirmPassword('');

//             Navigation.navigate('Signin');
//           })
//           .catch(error => {
//             console.error('Error updating profile:', error);
//             Toast.show('Error updating user profile', Toast.SHORT, {
//               backgroundColor: colors.red,
//             });
//           });
//       })
//       .catch(error => {
//         if (error.code === 'auth/email-already-in-use') {

//           Toast.show('That email address is already in use!', Toast.SHORT, {
//             backgroundColor: colors.red,
//           });
//         }

//         if (error.code === 'auth/invalid-email') {
//           Toast.show('That email address is invalid!', Toast.SHORT, {
//             backgroundColor: colors.red,
//           });
//         }
//         console.error(error);
//         Toast.show('Error during registration', Toast.SHORT, {
//           backgroundColor: colors.red,
//         });
//       });
//   };
//   const goBack = () => {
//     Navigation.goBack();
//   };

//   return (
//     <KeyboardAvoidingView
//       style={{flex: 1}}
//       behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//       >
//       <View style={styles.Container}>
//         <Header onPress={goBack} />
//         <ScrollView style={styles.secondCont} showsVerticalScrollIndicator={false}>
//           <Text style={styles.heading}>Create an Account</Text>
//           <View style={styles.inputBox}>
//             <Image source={images.user} style={styles.icon} />
//             <TextInput
//               value={name}
//               onChangeText={text => setName(text)}
//               placeholder="Username"
//               autoCapitalize="none"
//               style={styles.textInput}
//             />
//           </View>
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
//             <TouchableOpacity
//               onPress={() => setPasswordVisible(!passwordVisible)}>
//               <Image
//                 source={passwordVisible ? images.hide : images.view}
//                 style={styles.icon}
//               />
//             </TouchableOpacity>
//           </View>

//           <View style={styles.inputBox}>
//             <Image source={images.password} style={styles.icon} />
//             <TextInput
//               value={confirmPassword}
//               onChangeText={text => setConfirmPassword(text)}
//               placeholder="Confirm Password"
//               autoCapitalize="none"
//               secureTextEntry={!confirmPasswordVisible}
//               style={styles.textInput}
//             />
//             <TouchableOpacity
//               onPress={() =>
//                 setConfirmPasswordVisible(!confirmPasswordVisible)
//               }>
//               <Image
//                 source={confirmPasswordVisible ? images.hide : images.view}
//                 style={styles.icon}
//               />
//             </TouchableOpacity>
//           </View>
//           <Button onPress={onRegister} title={'Register'} />
//         </ScrollView>
//       </View>
//     </KeyboardAvoidingView>
//   );
// };

// export default RegisterWithEmail;

// const styles = StyleSheet.create({
//   Container: {
//     flex: 1,
//     backgroundColor: colors.white,
//   },
//   secondCont: {
//     flex: 2,
//     paddingVertical: 50,
//     paddingHorizontal: 20,
//   },
//   inputBox: {
//     width: '100%',
//     borderRadius: 5,
//     marginVertical: 10,
//     borderBottomWidth: 1,
//     paddingVertical: Platform.OS === 'ios' ? 10 : 0,
//     paddingHorizontal: 10,
//     backgroundColor: colors.white,
//     borderColor: colors.lightgray,
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 10,
//   },
//   heading: {
//     color: colors.primary,
//     fontSize: 25,
//     fontWeight: '700',
//     letterSpacing: 1.8,
//     lineHeight: 25,
//     marginBottom: 50,
//   },
//   icon: {
//     height: 20,
//     width: 20,
//   },
//   textInput: {
//     flex: 1,
//     paddingRight: 25,
//   },
// });








import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {images} from '../../assets';
import {colors} from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/header';
import Button from '../../components/button';
import Toast from 'react-native-simple-toast';
import { vh, vw } from '../../utils/dimensions';

const RegisterWithEmail = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({}); 

  const Navigation = useNavigation();

  const validateInputs = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Username cannot be empty';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = 'Email cannot be empty';
    } else if (!emailPattern.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!password.trim()) {
      newErrors.password = 'Password cannot be empty';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onRegister = () => {
    if (!validateInputs()) return; 

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        const user = auth().currentUser;
        user
          .updateProfile({
            displayName: name,
          })
          .then(() => {
            console.log('User account created and name updated');
            user
              .sendEmailVerification()
              .then(() => {
                Toast.show(
                  'Verification email sent. Please check your inbox to verify your email before logging in.',
                  Toast.LONG,
                  {
                    backgroundColor: colors.green,
                  },
                );
              })
              .catch(error => {
                console.error('Error sending verification email:', error);
              });

            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');

            Navigation.navigate('Signin');
          })
          .catch(error => {
            console.error('Error updating profile:', error);
            Toast.show('Error updating user profile', Toast.SHORT, {
              backgroundColor: colors.red,
            });
          });
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Toast.show('That email address is already in use!', Toast.SHORT, {
            backgroundColor: colors.red,
          });
        }

        if (error.code === 'auth/invalid-email') {
          Toast.show('That email address is invalid!', Toast.SHORT, {
            backgroundColor: colors.red,
          });
        }
        console.error(error);
        Toast.show('Error during registration', Toast.SHORT, {
          backgroundColor: colors.red,
        });
      });
  };

  const goBack = () => {
    Navigation.goBack();
  };

  return (
    // <KeyboardAvoidingView
    //   style={{flex: 1}}
    //   behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.Container}>
        <Header onPress={goBack} />
        <ScrollView style={styles.secondCont} showsVerticalScrollIndicator={false}>
          <Text style={styles.heading}>Create an Account</Text>

          <View style={styles.inputBox}>
            <Image source={images.user} style={styles.icon} />
            <TextInput
              value={name}
              onChangeText={text => setName(text)}
              placeholder="Username"
              autoCapitalize="none"
              style={styles.textInput}
            />
          </View>
          {errors.name && <Text style={styles.error}>{errors.name}</Text>}

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
          {errors.email && <Text style={styles.error}>{errors.email}</Text>}

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
            <TouchableOpacity
              onPress={() => setPasswordVisible(!passwordVisible)}>
              <Image
                source={passwordVisible ? images.hide : images.view}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          {errors.password && <Text style={styles.error}>{errors.password}</Text>}

          <View style={styles.inputBox}>
            <Image source={images.password} style={styles.icon} />
            <TextInput
              value={confirmPassword}
              onChangeText={text => setConfirmPassword(text)}
              placeholder="Confirm Password"
              autoCapitalize="none"
              secureTextEntry={!confirmPasswordVisible}
              style={styles.textInput}
            />
            <TouchableOpacity
              onPress={() =>
                setConfirmPasswordVisible(!confirmPasswordVisible)
              }>
              <Image
                source={confirmPasswordVisible ? images.hide : images.view}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          {errors.confirmPassword && (
            <Text style={styles.error}>{errors.confirmPassword}</Text>
          )}

          <Button onPress={onRegister} title={'Register'} />
        </ScrollView>
      </View>
   // </KeyboardAvoidingView>
  );
};

export default RegisterWithEmail;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  secondCont: {
    flex: 2,
    paddingTop: vh(30),
    paddingHorizontal: vh(20),
  },
  inputBox: {
    width: '100%',
    borderRadius: vw(5),
    marginVertical: vh(10),
    borderBottomWidth: 1,
    paddingVertical: Platform.OS === 'ios' ? vh(10) : 0,
    paddingHorizontal: vw(10),
    backgroundColor: colors.white,
    borderColor: colors.lightgray,
    flexDirection: 'row',
    alignItems: 'center',
    gap: vw(10),
  },
  heading: {
    color: colors.primary,
    fontSize: vw(25),
    fontWeight: '700',
    letterSpacing: 1.8,
    lineHeight: vh(25),
    marginBottom: vh(15),
  },
  icon: {
    height: vw(20),
    width: vw(20),
  },
  textInput: {
    flex: 1,
    paddingRight: vw(25),
  },
  error: {
    color: colors.red,
    fontSize: vw(12),
    marginBottom: vh(10),
  },
});
