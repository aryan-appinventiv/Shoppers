import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {images} from '../../assets';
import {vh, vw} from '../../utils/dimensions';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import LogoutModal from '../../components/logoutModal';
import Toast from 'react-native-simple-toast';
import { colors } from '../../utils/colors';

const Settings = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const Navigation = useNavigation();

  const gotoAbout=()=>{
    Navigation.navigate('Profile');
  }
  const gotoFeedback=()=>{
    Navigation.navigate('Feedback');
  }
  const gotoPrivacy=()=>{
    Navigation.navigate('PrivacyPolicy');
  }
  const gotoTerms=()=>{
    Navigation.navigate('TermsOfUse');
  }
  const gotoMode=()=>{
    toggleSwitch();
  }
  const gotoLogout = () => {
    setLogoutModalVisible(true);
  }
  const onLogout = () => {
    auth().signOut().then(response=>{
      Toast.show('User Signed out', Toast.SHORT, {
        backgroundColor: colors.orange,
      });
      console.log(("User signed out"));
      Navigation.reset({
        index: 0,
        routes: [{ name: 'Signin' }]
   })        
    }).catch(error=>{
      Toast.show('Cannot logout', Toast.SHORT, {
        backgroundColor: colors.red,
      });
      console.log(error);
    })
  };
  const closeLogoutModal =()=>{
    setLogoutModalVisible(false);
  }

  const items = [
    {id: 1, name: 'About', img: images.next, go: gotoAbout},
    {id: 2, name: 'Send Feedback', img: images.next, go: gotoFeedback},
    {id: 3, name: 'Privacy Policy', img: images.next, go: gotoPrivacy},
    {id: 4, name: 'Terms of Use', img: images.next, go: gotoTerms},
    {id: 5, name: 'Dark Mode', go: gotoMode},
    {id: 6, name: 'Logout', img: images.logout, go: gotoLogout},
  ];
  return (
    // <Logout/>
    <View style={styles.container}>
      {items.map((item, id) => {
        return (
          <TouchableOpacity style={styles.itemBtn} onPress={item.go} key={id}>
            <Text style={styles.itemBtnTxt}>{item.name}</Text>
            {item.img ? (
              <Image source={item.img} style={styles.itemImg} />
            ) : (
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{transform:[{scale:0.8}], marginRight:-vw(10)}}
              />
            )}
          </TouchableOpacity>
        );
      })}
        <LogoutModal
          visible={logoutModalVisible}
          onClose={closeLogoutModal}
          onConfirm={onLogout}
          title={"Are you sure you want to logout?"}
          desc={"You will be redirected to the Signin screen."}
      />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: vw(16),
  },
  itemBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    paddingHorizontal: vw(16),
    paddingVertical: vh(20),
    marginBottom: 1,
  },
  itemBtnTxt: {
    fontSize: vw(14),
    fontWeight: '500',
  },
  itemImg: {
    height: vw(15),
    width: vw(15),
  },
});
