import {
  Image,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  Modal,
  useWindowDimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {images} from '../../assets';
import {colors} from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-simple-toast';
import {strings} from '../../utils/strings';
import {getProfileStyles} from './styles';
import {useTheme} from '../../utils/ThemeContext';
import Animated, {FadeInUp} from 'react-native-reanimated';
import LogoutModal from '../../components/logoutModal';
import ProfileModal from '../../components/profileModal';
import ImageViewer from 'react-native-image-zoom-viewer';

const Profile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [name, setName] = useState('');
  const [newName, setNewName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [picModal, setPicModal] = useState(false);
  const [removeModal, setRemoveModal] = useState(false);
  const Navigation = useNavigation();

  const {isDarkMode} = useTheme();
  const myWidth = useWindowDimensions().width;
  const myHeight = useWindowDimensions().height;
  const styles = getProfileStyles(isDarkMode, myWidth, myHeight);

  useEffect(() => {
    const loadProfileImage = async () => {
      try {
        const savedImage = await AsyncStorage.getItem('profileImage');
        if (savedImage) {
          setProfileImage(savedImage);
        }
      } catch (error) {
        console.error('Failed to load profile image', error);
      }
    };

    loadProfileImage();

    const user = auth().currentUser;
    if (user) {
      setName(user.displayName || '');
    }
  }, []);

  const saveProfileImage = async (imagePath: string | any) => {
    try {
      await AsyncStorage.setItem('profileImage', imagePath);
      setProfileImage(imagePath);
    } catch (error) {
      console.error('Failed to save profile image', error);
    }
  };

  const removeProfileImage = async () => {
    try {
      await AsyncStorage.removeItem('profileImage');
    } catch (error) {
      console.error('Failed to remove profile image', error);
    }
  };

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        saveProfileImage(image.path);
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
        saveProfileImage(image.path);
        setModalVisible(false);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const goback = () => {
    Navigation.goBack();
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
  const removeImg = () => {
    setRemoveModal(true);
  };
  const cancel = () => {
    setRemoveModal(false);
  };
  const confirm = async () => {
    try {
      await removeProfileImage();
      setProfileImage(null);
      setRemoveModal(false);
      Toast.show('Profile Image removed successfully', Toast.SHORT, {
        backgroundColor: colors.green,
      });
    } catch (error) {
      console.error('Failed to remove profile image', error);
      Toast.show('Error removing profile image', Toast.SHORT, {
        backgroundColor: colors.red,
      });
    }
  };
  const togglePicModal = () => {
    setPicModal(!picModal);
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

          <Animated.View
            style={styles.header}
            entering={FadeInUp.duration(800)}>
            <TouchableOpacity onPress={togglePicModal}>
              {profileImage ? (
                <Image
                  source={{uri: profileImage}}
                  style={styles.profileImage}
                />
              ) : (
                <Image source={images.user} style={styles.profileImage} />
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleModal} activeOpacity={0.5}>
              <Text style={styles.changeImg}>{strings.change_profile_pic}</Text>
            </TouchableOpacity>
          </Animated.View>
          <ScrollView style={styles.infoContainer} bounces={false}>
            <Text style={styles.username}>{name || strings.no_username}</Text>
            <TouchableOpacity
              onPress={() => setShowName(!showName)}
              style={styles.changeUsername}>
              <Text style={styles.changeUsernameText}>
                {strings.change_username}
              </Text>
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
                {newName.trim().length < 5 && newName.trim().length > 0 && (
                  <Text style={styles.caution}>{strings.username_caution}</Text>
                )}
              </View>
            )}
            <View style={styles.separator} />
            <Text style={styles.passwordLabel}>{strings.dummy_pass}</Text>
            <TouchableOpacity
              onPress={() => setShowPass(!showPass)}
              style={styles.changeUsername}>
              <Text style={styles.changeUsernameText}>
                {strings.change_password}
              </Text>
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
                {newPassword.trim().length < 6 &&
                  newPassword.trim().length > 0 && (
                    <Text style={styles.caution}>
                      {strings.password_caution}
                    </Text>
                  )}
              </View>
            )}
          </ScrollView>
          <ProfileModal
            modalVisible={modalVisible}
            takePhotoFromCamera={takePhotoFromCamera}
            choosePhotoFromLibrary={choosePhotoFromLibrary}
            removeImg={removeImg}
            toggleModal={toggleModal}
          />
          <LogoutModal
            title={strings.remove_pic_title}
            desc={strings.remove_pic_desc}
            onClose={cancel}
            onConfirm={confirm}
            visible={removeModal}
          />
          <Modal visible={picModal} onRequestClose={togglePicModal}>

            <View style={styles.picModalCont}>
              <TouchableOpacity
                style={styles.picModalCross}
                onPress={togglePicModal}>
                <Image source={images.close} style={[styles.icon]} />
              </TouchableOpacity>
              <View style={styles.picModalPhotoCont}>
                {profileImage ? (
                  <ImageViewer
                    imageUrls={[{url: profileImage}]}
                    style={styles.picModalPhoto}
                    renderIndicator={() => null}
                    backgroundColor={colors.blackBackground}
                  />
                ) : (
                  <Image source={images.user} style={styles.picModalPhoto} />
                )}
              </View>
            </View>

          </Modal>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default Profile;
