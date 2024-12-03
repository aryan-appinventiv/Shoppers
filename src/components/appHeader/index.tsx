// import { Text, View, TouchableOpacity, Image} from 'react-native'
// import React, { useCallback, useState } from 'react'
// import { images } from '../../assets'
// import auth from '@react-native-firebase/auth'
// import { useFocusEffect } from '@react-navigation/native'
// import {useTheme} from '../../utils/ThemeContext'
// import { getHeaderStyle } from './styles'

// const AppHeader = () => {
//     const [username, setUsername] = useState('');

//     useFocusEffect(
//       useCallback(() => {
//         const currentUser = auth().currentUser;
//         if (currentUser) {
//           setUsername(currentUser.displayName);
//         }
//       }, [])
//     );

//     const {isDarkMode} = useTheme();
//     const styles = getHeaderStyle(isDarkMode);
  
//   return (
//     <View style={styles.userCont}>
//         <View style={styles.userCont1}>
//           <Image source={images.profile} style={styles.userImg} />
//           <View >
//             <Text style={styles.welcome}>Welcome</Text>
//             <Text style={styles.name}>{username || 'User'}!</Text>
//           </View>
//         </View>
//         <TouchableOpacity>
//           <Image source={images.bell} style={styles.logo} />
//         </TouchableOpacity>
//     </View>
//   )
// }

// export default AppHeader;





import { Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useCallback, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { images } from '../../assets';
import auth from '@react-native-firebase/auth';
import { useFocusEffect } from '@react-navigation/native';
import { useTheme } from '../../utils/ThemeContext';
import { getHeaderStyle } from './styles';

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
    }, [])
  );

  const { isDarkMode } = useTheme();
  const styles = getHeaderStyle(isDarkMode);

  return (
    <View style={styles.userCont}>
      <View style={styles.userCont1}>
        <Image
          source={profileImage ? { uri: profileImage } : images.profile}
          style={styles.userImg}
        />
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
