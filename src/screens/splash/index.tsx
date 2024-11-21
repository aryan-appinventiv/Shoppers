// import React, { useEffect } from 'react';
// import { StyleSheet, View } from 'react-native';
// import FastImage from 'react-native-fast-image';
// import { images } from '../../assets';
// import { Wwidth } from '../../utils/dimensions';
// import { useNavigation } from '@react-navigation/native';
// import auth from '@react-native-firebase/auth';


// const Splash = () => {
//   const Navigation = useNavigation();

//   // useEffect(() => {
//   //   const timer = setTimeout(() => {
//   //     Navigation.replace('Tutorial');
//   //   }, 2000);
//   //   return () => clearTimeout(timer);
//   // }, [Navigation]);

//   useEffect(() => {
//     // Check if user is already logged in
//     const unsubscribe = auth().onAuthStateChanged(user => {
//         if (user && user.emailVerified) {
//             console.log('User is already logged in');
//             Navigation.navigate('BottomTabNavigator'); // Navigate to the home screen
//         }
//         else{
//           const timer = setTimeout(() => {
//             Navigation.reset({
//               index: 0,
//               routes: [{ name: 'Tutorial' }]
//          })
//           }, 2000);
//           return () => clearTimeout(timer);
//         }
//     });
//     return () => unsubscribe(); // Cleanup the listener on unmount
// }, []);


//   return (
//     <View style={styles.container}>
//       <FastImage source={images.splash_gif} style={styles.splashGif} resizeMode={FastImage.resizeMode.contain} />
//     </View>
//   );
// }
// export default Splash;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor:'white',
//   },
//   splashGif: {
//     height: Wwidth / 2,
//     width: Wwidth / 2,
//   }
// });



// import React, { useEffect } from 'react';
// import { StyleSheet, View } from 'react-native';
// import FastImage from 'react-native-fast-image';
// import { images } from '../../assets';
// import { Wwidth } from '../../utils/dimensions';
// import { useNavigation } from '@react-navigation/native';
// import auth from '@react-native-firebase/auth';

// const Splash = () => {
//   const navigation = useNavigation();

//   useEffect(() => {
   
//     const timer = setTimeout(() => {
 
//       auth().onAuthStateChanged(user => {
//         if (user && user.emailVerified) {
//           console.log('User is already logged in');
//           navigation.reset({
//             index: 0,
//             routes: [{ name: 'BottomTabNavigator' }]
//           });
//         } else {
//           navigation.reset({
//             index: 0,
//             routes: [{ name: 'Tutorial' }]
//           });
//         }
//       });
//     }, 2000);

//     return () => clearTimeout(timer); 
//   }, [navigation]);

//   return (
//     <View style={styles.container}>
//       <FastImage source={images.splash_gif} style={styles.splashGif} resizeMode={FastImage.resizeMode.contain} />
//     </View>
//   );
// }

// export default Splash;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },
//   splashGif: {
//     height: Wwidth / 2,
//     width: Wwidth / 2,
//   }
// });



import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { images } from '../../assets';
import { Wwidth } from '../../utils/dimensions';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      auth().onAuthStateChanged(user => {
        if (user) {
          const providerId = user.providerData[0]?.providerId;

          // Check if user is logged in with an email and has verified their email
          if (providerId === 'password' && !user.emailVerified) {
            // If the user is logged in with an email but hasn't verified it, go to Tutorial
            navigation.reset({
              index: 0,
              routes: [{ name: 'Tutorial' }]
            });
          } else {
            // User is either verified or logged in with a phone number (no email verification needed)
            console.log('User is already logged in');
            navigation.reset({
              index: 0,
              routes: [{ name: 'BottomTabNavigator' }] // Navigate to home screen
            });
          }
        } else {
          // If no user is logged in, go to Tutorial screen
          navigation.reset({
            index: 0,
            routes: [{ name: 'Tutorial' }]
          });
        }
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FastImage source={images.splash_gif} style={styles.splashGif} resizeMode={FastImage.resizeMode.contain} />
    </View>
  );
}

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  splashGif: {
    height: Wwidth / 2,
    width: Wwidth / 2,
  }
});
