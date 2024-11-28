import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { images } from '../../assets';
import { Wwidth } from '../../utils/dimensions';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { colors } from '../../utils/colors';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      auth().onAuthStateChanged(user => {
        if (user) {
          const providerId = user.providerData[0]?.providerId;

          if (providerId === 'password' && !user.emailVerified) {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Tutorial' }]
            });
          } else {
            console.log('User is already logged in');
            navigation.reset({
              index: 0,
              routes: [{ name: 'BottomTabNavigator' }] 
            });
          }
        } else {
         
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
    backgroundColor: colors.white,
  },
  splashGif: {
    height: Wwidth / 2,
    width: Wwidth / 2,
  }
});
