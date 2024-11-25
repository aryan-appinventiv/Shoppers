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

const Settings = () => {
  const [isEnabled, setIsEnabled] = useState(false);
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
    Alert.alert('Are you sure want to logout?', 'You will be redirected to the Signin screen.', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => onLogout()},
    ]);
  }
  const onLogout = () => {
    auth().signOut().then(response=>{
      Alert.alert("User Signed out");
      console.log(("User signed out"));
      Navigation.reset({
        index: 0,
        routes: [{ name: 'Signin' }]
   })        
    }).catch(error=>{
      Alert.alert("Cannot logout");
      console.log(error);
    })
  };

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
      {items.map(item => {
        return (
          <TouchableOpacity style={styles.itemBtn} onPress={item.go}>
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
    backgroundColor: 'white',
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
