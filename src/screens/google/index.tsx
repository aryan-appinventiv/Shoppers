
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { WEBCLIENTID } from '../../utils/webClientID';

// Configure Google Sign-In (this should be done once in your app's setup)
GoogleSignin.configure({
  webClientId: WEBCLIENTID,
});

export async function onGoogleButtonPress() {
 
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
    const googleCredential = auth.GoogleAuthProvider.credential(signInResult.data?.idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }









