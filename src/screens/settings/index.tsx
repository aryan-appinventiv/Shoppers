import {
  Image,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {images} from '../../assets';
import {vw} from '../../utils/dimensions';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import LogoutModal from '../../components/logoutModal';
import Toast from 'react-native-simple-toast';
import {colors} from '../../utils/colors';
import {useTheme} from '../../utils/ThemeContext';
import styles from './styles';
import { strings } from '../../utils/strings';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigators';

const Settings = () => {
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const {isDarkMode, toggleTheme} = useTheme();

  const Navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Profile'>>();

  const gotoAbout = () => {
    Navigation.navigate('Profile');
  };
  const gotoFeedback = () => {
    Navigation.navigate('Feedback');
  };
  const gotoPrivacy = () => {
    Navigation.navigate('PrivacyPolicy');
  };
  const gotoTerms = () => {
    Navigation.navigate('TermsOfUse');
  };
  const gotoMode = () => {
    toggleTheme();
  };
  const gotoLogout = () => {
    setLogoutModalVisible(true);
  };
  const onLogout = () => {
    auth()
      .signOut()
      .then(response => {
        Toast.show('User Signed out', Toast.SHORT, {
          backgroundColor: colors.primary,
        });
        console.log('User signed out');
        Navigation.reset({
          index: 0,
          routes: [{name: 'Signin'}],
        });
      })
      .catch(error => {
        Toast.show('Cannot logout', Toast.SHORT, {
          backgroundColor: colors.red,
        });
        console.log(error);
      });
  };
  const closeLogoutModal = () => {
    setLogoutModalVisible(false);
  };

  const items = [
    {id: 1, name: 'About', img: isDarkMode? images.nextWhite : images.next, go: gotoAbout},
    {id: 2, name: 'Send Feedback', img: isDarkMode? images.nextWhite : images.next, go: gotoFeedback},
    {id: 3, name: 'Privacy Policy', img: isDarkMode? images.nextWhite : images.next, go: gotoPrivacy},
    {id: 4, name: 'Terms of Use', img: isDarkMode? images.nextWhite : images.next, go: gotoTerms},
    {id: 5, name: 'Dark Mode', go: gotoMode},
    {id: 6, name: 'Logout', img: images.logout, go: gotoLogout},
  ];
  return (
    <ScrollView
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? colors.black : colors.white},
      ]}>
      {items.map((item, id) => {
        return (
          <TouchableOpacity style={styles.itemBtn} onPress={item.go} key={id}>
            <Text
              style={[
                styles.itemBtnTxt,
                {color: isDarkMode ? colors.white : colors.black},
              ]}>
              {item.name}
            </Text>
            {item.img ? (
              <Image source={item.img} style={styles.itemImg} />
            ) : (
              <Switch
                trackColor={{false: colors.trackcolor_false, true: colors.trackcolor_true}}
                thumbColor={isDarkMode ? colors.thumbcolor_false : colors.thumbcolor_true}
                ios_backgroundColor={colors.ios_bg}
                onValueChange={toggleTheme}
                value={isDarkMode}
                style={{transform: [{scale: 0.8}], marginRight: -vw(10)}}
              />
            )}
          </TouchableOpacity>
        );
      })}
      <LogoutModal
        visible={logoutModalVisible}
        onClose={closeLogoutModal}
        onConfirm={onLogout}
        title={strings.title_logout}
        desc={strings.desc_logout}
      />
    </ScrollView>
  );
};

export default Settings;

