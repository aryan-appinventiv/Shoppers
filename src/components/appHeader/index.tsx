import {Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useCallback, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {images} from '../../assets';
import auth from '@react-native-firebase/auth';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useTheme} from '../../utils/ThemeContext';
import {getHeaderStyle} from './styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigators';

const AppHeader: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useFocusEffect(
    useCallback(() => {
      const fetchUserData = async () => {
        const currentUser = auth().currentUser;
        if (currentUser) {
          setUsername(currentUser.displayName || 'User');
        }

        try {
          const savedImage = await AsyncStorage.getItem('profileImage');
          if (savedImage) {
            setProfileImage(savedImage);
          }
        } catch (error) {
          console.error('Failed to load profile image', error);
        }
      };

      fetchUserData();
    }, []),
  );
  const Navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {isDarkMode} = useTheme();
  const styles = getHeaderStyle(isDarkMode);
  const gotoProfile = () => {
    Navigation.navigate('Profile');
  };

  return (
    <View style={styles.userCont}>
      <View style={styles.userCont1}>
        <TouchableOpacity onPress={gotoProfile}>
          <Image
            source={profileImage ? {uri: profileImage} : images.user}
            style={styles.userImg}
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.welcome}>Welcome</Text>
          <Text style={styles.name}>{username}!</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Image source={images.bell} style={styles.logo} />
      </TouchableOpacity>
    </View>
  );
};

export default AppHeader;
