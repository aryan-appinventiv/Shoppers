import React, { useEffect } from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { images } from '../../assets';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigators';

const Splash = () => {
  const Navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    const timer = setTimeout(() => {
      auth().onAuthStateChanged(user => {
        if (user) {
          const providerId = user.providerData[0]?.providerId;

          if (providerId === 'password' && !user.emailVerified) {
            Navigation.reset({
              index: 0,
              routes: [{ name: 'Tutorial' }]
            });
          } else {
            console.log('User is already logged in');
            Navigation.reset({
              index: 0,
              routes: [{ name: 'BottomTabNavigator' }] 
            });
          }
        } else {
         
          Navigation.reset({
            index: 0,
            routes: [{ name: 'Tutorial' }]
          });
        }
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [Navigation]);

  return (
    <View style={styles.container}>
      <FastImage source={images.splash_gif} style={styles.splashGif} resizeMode={FastImage.resizeMode.contain} />
    </View>
  );
}

export default Splash;


