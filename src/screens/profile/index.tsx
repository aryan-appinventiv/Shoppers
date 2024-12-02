import {
    Image,
    Modal,
    Platform,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    TouchableWithoutFeedback,
    ScrollView,
    KeyboardAvoidingView,
    Keyboard,
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
  import ImagePicker from 'react-native-image-crop-picker';
  import {images} from '../../assets';
  import {colors} from '../../utils/colors';
  import {useNavigation} from '@react-navigation/native';
  import auth from '@react-native-firebase/auth';
  import Toast from 'react-native-simple-toast';
  import { strings } from '../../utils/strings';
  import { getProfileStyles } from './styles';
  import {useTheme} from '../../utils/ThemeContext';  
  const Profile = () => {
    const [profileImage, setProfileImage] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [showName, setShowName] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [name, setName] = useState('');
    const [newName, setNewName] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const Navigation = useNavigation();
  
    useEffect(() => {
      const user = auth().currentUser;
      if (user) {
        setName(user.displayName || '');
      }
    }, []);

    const {isDarkMode} = useTheme();
    const styles = getProfileStyles(isDarkMode);
  
    const takePhotoFromCamera = () => {
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      })
        .then(image => {
          setProfileImage(image.path);
          setModalVisible(false);
        })
        .catch(error => {
          console.log(error);
        });
    };
  
    const choosePhotoFromLibrary = () => {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      })
        .then(image => {
          setProfileImage(image.path);
          setModalVisible(false);
        })
        .catch(error => {
          console.log(error);
        });
    };
  
    const toggleModal = () => {
      setModalVisible(!modalVisible);
    };
  
    const updateName = () => {
      const currentUser = auth().currentUser;
      if (currentUser) {
        currentUser
          .updateProfile({
            displayName: newName,
          })
          .then(() => {
            setName(newName);
            setNewName('');
            Toast.show(strings.username_updated_successfully, Toast.SHORT, {
              backgroundColor: colors.green,
            });
          })
          .catch(error => {
            console.error(error);
            Toast.show(strings.error_updating_username, Toast.SHORT, {
              backgroundColor: colors.red,
            });
          });
      }
    };
  
    const updatePassword = () => {
      const currentUser = auth().currentUser;
      if (currentUser) {
        currentUser
          .updatePassword(newPassword)
          .then(() => {
            setNewPassword('');
            Toast.show(strings.password_updated_successfully, Toast.SHORT, {
              backgroundColor: colors.green,
            });
          })
          .catch(error => {
            console.error(error);
            Toast.show(strings.error_updating_password, Toast.SHORT, {
              backgroundColor: colors.red,
            });
          });
      }
    };
    const goback = () => {
      Navigation.goBack();
    };
  
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView style={styles.container} bounces={false}>
            <View style={styles.backCont}>
              <TouchableOpacity onPress={goback} style={styles.back}>
                <Image source={images.back} style={styles.backImg} />
              </TouchableOpacity>
            </View>
  
            <View style={styles.header}>
              <TouchableOpacity onPress={toggleModal}>
                {profileImage ? (
                  <Image source={{uri: profileImage}} style={styles.profileImage} />
                ) : (
                  <Image source={images.profile} style={styles.profileImage} />
                )}
              </TouchableOpacity>
              <Text style={styles.changeImg} onPress={toggleModal}>
                {strings.change_profile_pic}
              </Text>
            </View>
            <ScrollView style={styles.infoContainer}>
              <Text style={styles.username}>{name || strings.no_username}</Text>
              <TouchableOpacity
                onPress={() => setShowName(!showName)}
                style={styles.changeUsername}>
                <Text style={styles.changeUsernameText}>{strings.change_username}</Text>
              </TouchableOpacity>
              {showName && (
                <View style={styles.inputContainer}>
                  <TextInput
                    placeholder={strings.enter_new_username}
                    placeholderTextColor={colors.gray}
                    style={styles.textInputUsername}
                    value={newName}
                    onChangeText={setNewName}
                  />
                  <TouchableOpacity
                    style={[
                      styles.button,
                      {opacity: newName.trim().length < 5 ? 0.8 : 1},
                    ]}
                    onPress={updateName}
                    disabled={newName.trim().length < 5}>
                    <Text style={styles.buttonText}>{strings.change}</Text>
                  </TouchableOpacity>
                  {newName.trim().length < 5 && newName.trim().length>0 && (
                    <Text style={styles.caution}>
                      {strings.username_caution}
                    </Text>
                  )}
                </View>
              )}
              <View style={styles.separator} />
              <Text style={styles.passwordLabel}>{strings.dummy_pass}</Text>
              <TouchableOpacity
                onPress={() => setShowPass(!showPass)}
                style={styles.changeUsername}>
                <Text style={styles.changeUsernameText}>{strings.change_password}</Text>
              </TouchableOpacity>
              {showPass && (
                <View style={styles.inputContainer}>
                  <View style={styles.textInput}>
                    <TextInput
                      value={newPassword}
                      onChangeText={setNewPassword}
                      placeholder={strings.enter_new_password}
                      secureTextEntry={!passwordVisible}
                      style={styles.inputStyle}
                    />
                    <TouchableOpacity
                      onPress={() => setPasswordVisible(!passwordVisible)}>
                      <Image
                        source={passwordVisible ? images.hide : images.view}
                        style={styles.icon}
                      />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    style={[
                      styles.button,
                      {opacity: newName.trim().length < 5 ? 0.8 : 1},
                    ]}
                    onPress={updatePassword}
                    disabled={newPassword.trim().length < 6}>
                    <Text style={styles.buttonText}>{strings.change}</Text>
                  </TouchableOpacity>
                  {newPassword.trim().length < 6 && newPassword.trim().length>0 && (
                    <Text style={styles.caution}>
                      {strings.password_caution}
                    </Text>
                  )}
                </View>
              )}
            </ScrollView>
            <Modal transparent visible={modalVisible} animationType="fade">
              <TouchableWithoutFeedback onPress={toggleModal}>
                <View style={styles.modalOverlay}>
                  <View style={styles.modalContent}>
                    <TouchableOpacity
                      style={styles.modalButton}
                      onPress={takePhotoFromCamera}>
                      <Text style={styles.modalButtonText}>{strings.open_camera}</Text>
                    </TouchableOpacity>
                    <View style={styles.separator} />
                    <TouchableOpacity
                      style={styles.modalButton}
                      onPress={choosePhotoFromLibrary}>
                      <Text style={styles.modalButtonText}>{strings.choose_from_gallery}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </Modal>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  };
  
  export default Profile;
  
  
  