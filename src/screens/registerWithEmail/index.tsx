// import {
//   Image,
//   Platform,
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
// import Animated, {

//   FadeInLeft,
//   FadeInRight,
//   FadeInUp,
  
// } from 'react-native-reanimated';

// const RegisterWithEmail = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const onRegister = () => {
//     auth()
//       .createUserWithEmailAndPassword(email, password)
//       .then(() => {
//         console.log('User account created');
//       })
//       .catch(error => {
//         // if (error.code === 'auth/email-already-in-use') {
//         //     console.log('That email address is already in use!');
//         // }

//         // if (error.code === 'auth/invalid-email') {
//         //     console.log('That email address is invalid!');
//         // }

//         console.error(error);
//       });
//   };

//   return (
//     <View style={styles.Container}>
//       <Animated.View style={styles.firstCont} entering={FadeInUp.delay(200).duration(500)}>
//         <Animated.Text
//           entering={FadeInRight.delay(500).duration(500)}
//           style={styles.title}>
//           NEWS
//         </Animated.Text>
//         <Animated.Text
//           entering={FadeInLeft.delay(600).duration(500)}
//           style={styles.desc}>
//           North-East-West-South
//         </Animated.Text>
//       </Animated.View>
//       <View style={styles.secondCont}>
//         <Text style={styles.heading}>Create an Account</Text>

//         <View style={styles.inputBox}>
//           <Image source={images.mail} style={styles.icon} />
//           <TextInput
//             value={email}
//             onChangeText={text => setEmail(text)}
//             placeholder="Email Address"
//             autoCapitalize="none"
//             style={styles.textInput}
//           />
//         </View>
//         <View style={styles.inputBox}>
//           <Image source={images.password} style={styles.icon} />
//           <TextInput
//             value={password}
//             onChangeText={text => setPassword(text)}
//             placeholder="Password"
//             autoCapitalize="none"
//             style={styles.textInput}
//           />
//         </View>
//         <View style={styles.inputBox}>
//           <Image source={images.password} style={styles.icon} />
//           <TextInput
//             value={confirmPassword}
//             onChangeText={text => setConfirmPassword(text)}
//             placeholder=" Confirm Password"
//             autoCapitalize="none"
//             style={styles.textInput}
//           />
//         </View>
//         <TouchableOpacity onPress={onRegister} style={styles.register}>
//           <Text style={styles.registerTitle}>Register</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default RegisterWithEmail;

// const styles = StyleSheet.create({
//   Container: {
//     flex: 1,

//     backgroundColor: 'white',
//   },
//   firstCont: {
//     flex: 1,
//     backgroundColor: colors.primary,
//     paddingTop: 50,
//     paddingHorizontal: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   secondCont: {
//     flex: 4,
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     paddingVertical: 50,
//     paddingHorizontal: 20,
//   },
//   wrapper: {
//     flex: 1,
//   },
//   inputBox: {
//     width: '100%',
//     borderRadius: 5,
//     marginVertical: 10,
//     borderBottomWidth: 1,
//     paddingVertical: Platform.OS === 'ios' ? 10 : 0,
//     paddingHorizontal: 10,
//     backgroundColor: 'white',
//     borderColor: 'lightgray',
//     flexDirection: 'row',
//     gap: 10,
//     alignItems: 'center',
//   },
//   title: {
//     color: colors.white,
//     fontSize: 25,
//     fontWeight: '700',
//     letterSpacing: 2.7,
//     lineHeight: 25,
//   },
//   heading:{
//     color: colors.primary,
//     fontSize: 25,
//     fontWeight: '700',
//     letterSpacing: 1.8,
//     lineHeight: 25,
//     marginBottom:50,
//   },
//   desc: {
//     color: 'gray',
//     letterSpacing: 2,
//     fontWeight: '600',
//     marginVertical: 20,
//     fontSize: 15,
//     textAlign:'center',
//   },

//   animatedView: {
//     width: '100%',
//   },

//   icon: {
//     height: 20,
//     width: 20,
//   },
//   textInput: {
//     paddingRight: 25,
//   },
//   register: {
//     backgroundColor: colors.primary,
//     width: '100%',
//     padding: 15,
//     alignItems: 'center',
//     marginVertical: 30,
//   },
//   registerTitle: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });









// import {
//   Alert,
//   Image,
//   Platform,
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
// import Animated, { FadeInLeft, FadeInRight, FadeInUp } from 'react-native-reanimated';

// const RegisterWithEmail = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const onRegister = () => {
//     if (password !== confirmPassword) {
//       Alert.alert("Passwords do not match");
//       return;
//     }

//     auth()
//       .createUserWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         console.log('User account created');

//         // Send verification email
//         userCredential.user.sendEmailVerification()
//           .then(() => {
//             Alert.alert('Verification email sent', 'Please check your inbox to verify your email before logging in.');
//           })
//           .catch(error => {
//             console.error("Error sending verification email:", error);
//           });
//       })
//       .catch(error => {
//         console.error(error);
//         Alert.alert("Error during registration");
//       });
//   };

//   return (
//     <View style={styles.Container}>
//       <Animated.View style={styles.firstCont} entering={FadeInUp.delay(200).duration(500)}>
//         <Animated.Text entering={FadeInRight.delay(500).duration(500)} style={styles.title}>
//           NEWS
//         </Animated.Text>
//         <Animated.Text entering={FadeInLeft.delay(600).duration(500)} style={styles.desc}>
//           North-East-West-South
//         </Animated.Text>
//       </Animated.View>
//       <View style={styles.secondCont}>
//         <Text style={styles.heading}>Create an Account</Text>
//         <View style={styles.inputBox}>
//           <Image source={images.mail} style={styles.icon} />
//           <TextInput
//             value={email}
//             onChangeText={text => setEmail(text)}
//             placeholder="Email Address"
//             autoCapitalize="none"
//             style={styles.textInput}
//           />
//         </View>
//         <View style={styles.inputBox}>
//           <Image source={images.password} style={styles.icon} />
//           <TextInput
//             value={password}
//             onChangeText={text => setPassword(text)}
//             placeholder="Password"
//             autoCapitalize="none"
//             secureTextEntry
//             style={styles.textInput}
//           />
//         </View>
//         <View style={styles.inputBox}>
//           <Image source={images.password} style={styles.icon} />
//           <TextInput
//             value={confirmPassword}
//             onChangeText={text => setConfirmPassword(text)}
//             placeholder="Confirm Password"
//             autoCapitalize="none"
//             secureTextEntry
//             style={styles.textInput}
//           />
//         </View>
//         <TouchableOpacity onPress={onRegister} style={styles.register}>
//           <Text style={styles.registerTitle}>Register</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default RegisterWithEmail;

// const styles = StyleSheet.create({
//   Container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   firstCont: {
//     flex: 1,
//     backgroundColor: colors.primary,
//     paddingTop: 50,
//     paddingHorizontal: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   secondCont: {
//     flex: 4,
//     alignItems: 'center',
//     justifyContent: 'flex-start',
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
//     backgroundColor: 'white',
//     borderColor: 'lightgray',
//     flexDirection: 'row',
//     gap: 10,
//     alignItems: 'center',
//   },
//   title: {
//     color: colors.white,
//     fontSize: 25,
//     fontWeight: '700',
//     letterSpacing: 2.7,
//     lineHeight: 25,
//   },
//   heading: {
//     color: colors.primary,
//     fontSize: 25,
//     fontWeight: '700',
//     letterSpacing: 1.8,
//     lineHeight: 25,
//     marginBottom: 50,
//   },
//   desc: {
//     color: 'gray',
//     letterSpacing: 2,
//     fontWeight: '600',
//     marginVertical: 20,
//     fontSize: 15,
//     textAlign: 'center',
//   },
//   icon: {
//     height: 20,
//     width: 20,
//   },
//   textInput: {
//     paddingRight: 25,
//   },
//   register: {
//     backgroundColor: colors.primary,
//     width: '100%',
//     padding: 15,
//     alignItems: 'center',
//     marginVertical: 30,
//   },
//   registerTitle: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });


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
// import { useNavigation } from '@react-navigation/native';
  
//   const RegisterWithEmail = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [passwordVisible, setPasswordVisible] = useState(false);
//     const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

//     const Navigation = useNavigation();
  
//     const onRegister = () => {
//       if (password !== confirmPassword) {
//         Alert.alert("Passwords do not match");
//         return;
//       }
//       if(!name){
//         Alert.alert("Username cannot be null");
//         return;
//       }
  
//       auth()
//         .createUserWithEmailAndPassword(email, password)
//         .then(() => {
//           console.log('User account created');
//           auth().currentUser.sendEmailVerification()
//             .then(() => {
//               Alert.alert('Verification email sent', 'Please check your inbox to verify your email before logging in.');
//             })
//             .catch(error => {
//               console.error("Error sending verification email:", error);
//             });
  
        
//           setEmail('');
//           setPassword('');
//           setConfirmPassword('');

//           Navigation.navigate('Signin');
//         })
//         .catch(error => {
//              if (error.code === 'auth/email-already-in-use') {
//             Alert.alert('That email address is already in use!');
//         }

//         if (error.code === 'auth/invalid-email') {
//             Alert.alert('That email address is invalid!');
//         }
//           console.error(error);
//           Alert.alert("Error during registration");
//         });
//     };
  
//     return (
//       <View style={styles.Container}>
//         <Animated.View style={styles.firstCont} entering={FadeInUp.delay(200).duration(500)}>
//         <Image source={images.tutorial} resizeMode='cover' style={styles.bcImg}/>
//         </Animated.View>
//         <View style={styles.secondCont}>
//           <Text style={styles.heading}>Create an Account</Text>
//           <View style={styles.inputBox}>
//             <Image source={images.mail} style={styles.icon} />
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
//             <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
//             <Image
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
//             <TouchableOpacity onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
//               <Image
//                 source={confirmPasswordVisible ? images.hide : images.view}
//                 style={styles.icon}
//               />
//             </TouchableOpacity>
//           </View>
  
//           <TouchableOpacity onPress={onRegister} style={styles.register}>
//             <Text style={styles.registerTitle}>Register</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   };
  
//   export default RegisterWithEmail;
  
//   const styles = StyleSheet.create({
//     Container: {
//       flex: 1,
//       backgroundColor: 'white',
//     },
//     firstCont: {
//       flex: 1,
//       backgroundColor: colors.primary,
     
//     },
//     secondCont: {
//       flex: 2,
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
//     heading: {
//       color: colors.primary,
//       fontSize: 25,
//       fontWeight: '700',
//       letterSpacing: 1.8,
//       lineHeight: 25,
//       marginBottom: 50,
//     },
//     icon: {
//       height: 20,
//       width: 20,
//     },
//     textInput: {
//       flex: 1,
//       paddingRight: 25,
//     },
//     register: {
//       backgroundColor: colors.primary,
//       width: '100%',
//       padding: 15,
//       alignItems: 'center',
//       marginVertical: 30,
//       borderRadius:10,
//     },
//     registerTitle: {
//       color: 'white',
//       fontSize: 16,
//       fontWeight: '600',
//     },
//     bcImg:{
//         width:'100%',
//         flex:1
//     }
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

const RegisterWithEmail = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const Navigation = useNavigation();

    const onRegister = () => {
        if (password !== confirmPassword) {
            Alert.alert("Passwords do not match");
            return;
        }
        if (!name) {
            Alert.alert("Username cannot be null");
            return;
        }

        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                const user = auth().currentUser;

                // Update user's display name
                user.updateProfile({
                    displayName: name,
                })
                .then(() => {
                    console.log('User account created and name updated');

                    // Send verification email
                    user.sendEmailVerification()
                        .then(() => {
                            Alert.alert(
                                'Verification email sent',
                                'Please check your inbox to verify your email before logging in.'
                            );
                        })
                        .catch(error => {
                            console.error("Error sending verification email:", error);
                        });

                    // Clear input fields
                    setName('');
                    setEmail('');
                    setPassword('');
                    setConfirmPassword('');

                    // Navigate to Signin screen
                    Navigation.navigate('Signin');
                })
                .catch(error => {
                    console.error("Error updating profile:", error);
                    Alert.alert("Error updating user profile");
                });
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    Alert.alert('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    Alert.alert('That email address is invalid!');
                }
                console.error(error);
                Alert.alert("Error during registration");
            });
    };
    const goBack=()=>{
        Navigation.goBack();
    }

    return (
        <View style={styles.Container}>
            <Header onPress={goBack} />
            <View style={styles.secondCont}>
                <Text style={styles.heading}>Create an Account</Text>
                <View style={styles.inputBox}>
                    <Image source={images.mail} style={styles.icon} />
                    <TextInput
                        value={name}
                        onChangeText={text => setName(text)}
                        placeholder="Username"
                        autoCapitalize="none"
                        style={styles.textInput}
                    />
                </View>
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
                    <TouchableOpacity onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
                        <Image
                            source={confirmPasswordVisible ? images.hide : images.view}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
                <Button onPress={onRegister} title={"Register"}/>
            </View>
        </View>
    );
};

export default RegisterWithEmail;

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
});
