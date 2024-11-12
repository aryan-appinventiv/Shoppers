// import { Button, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { GoogleSignin } from '@react-native-google-signin/google-signin'
// import { WEBCLIENTID } from '../../utils/webClientID'
// import auth from '@react-native-firebase/auth'

// const Google = () => {
//     GoogleSignin.configure({
//         webClientId: WEBCLIENTID,
//     });
//     async function onGoogleButtonPress() {
//         // Check if your device supports Google Play
//         await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
//         // Get the users ID token
//         const signInResult = await GoogleSignin.signIn();
      
//         // Try the new style of google-sign in result, from v13+ of that module
//         let idToken = signInResult.data?.idToken;
//         if (!idToken) {
//           // if you are using older versions of google-signin, try old style result
//           idToken = signInResult.idToken;
//         }
//         if (!idToken) {
//           throw new Error('No ID token found');
//         }
      
//         // Create a Google credential with the token
//         const googleCredential = auth.GoogleAuthProvider.credential(signInResult.data.token);
      
//         // Sign-in the user with the credential
//         return auth().signInWithCredential(googleCredential);
//       }
//   return (
//     <View>
//       <Button title="google-signin" 
//             onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
// />
//     </View>
//   )
// }

// export default Google;

// const styles = StyleSheet.create({})





// utils/authFunctions.js
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { WEBCLIENTID } from '../../utils/webClientID';

// Configure Google Sign-In (this should be done once in your app's setup)
GoogleSignin.configure({
  webClientId: WEBCLIENTID,
});

export async function onGoogleButtonPress() {
  try {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

    // Get the user's ID token
    const signInResult = await GoogleSignin.signIn();

    // Try new style of Google sign-in result
    let idToken = signInResult.data?.idToken;
    if (!idToken) {
      idToken = signInResult.idToken;  // For older versions
    }
    if (!idToken) {
      throw new Error('No ID token found');
    }

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  } catch (error) {
    console.error("Google Sign-In Error:", error);
    throw error;
  }
}
