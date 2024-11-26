import {
    Alert,
    Image,
    Modal,
    Platform,
    StyleSheet,
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
  import {vh, vw} from '../../utils/dimensions';
  import {useNavigation} from '@react-navigation/native';
  import auth from '@react-native-firebase/auth';
  
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
            Alert.alert('Username updated successfully');
          })
          .catch(error => {
            console.error(error);
            Alert.alert('Error updating username');
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
            Alert.alert('Password updated successfully');
          })
          .catch(error => {
            console.error(error);
            Alert.alert('Error updating password');
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
                Change Profile Picture
              </Text>
            </View>
            <ScrollView style={styles.infoContainer}>
              <Text style={styles.username}>{name || 'No Username'}</Text>
              <TouchableOpacity
                onPress={() => setShowName(!showName)}
                style={styles.changeUsername}>
                <Text style={styles.changeUsernameText}>Change Username</Text>
              </TouchableOpacity>
              {showName && (
                <View style={styles.inputContainer}>
                  <TextInput
                    placeholder="Enter new username"
                    placeholderTextColor={'gray'}
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
                    <Text style={styles.buttonText}>Change</Text>
                  </TouchableOpacity>
                  {newName.trim().length < 5 && (
                    <Text style={styles.caution}>
                      Username should be at least 5 characters long.
                    </Text>
                  )}
                </View>
              )}
              <View style={styles.separator} />
              <Text style={styles.passwordLabel}>********</Text>
              <TouchableOpacity
                onPress={() => setShowPass(!showPass)}
                style={styles.changeUsername}>
                <Text style={styles.changeUsernameText}>Change Password</Text>
              </TouchableOpacity>
              {showPass && (
                <View style={styles.inputContainer}>
                  <View style={styles.textInput}>
                    <TextInput
                      value={newPassword}
                      onChangeText={setNewPassword}
                      placeholder="Enter new Password"
                      secureTextEntry={!passwordVisible}
                      style={{flex: 1}}
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
                    <Text style={styles.buttonText}>Change</Text>
                  </TouchableOpacity>
                  {newPassword.trim().length < 6 && (
                    <Text style={styles.caution}>
                      Password should be at least 6 characters.
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
                      <Text style={styles.modalButtonText}>Open Camera</Text>
                    </TouchableOpacity>
                    <View style={styles.separator} />
                    <TouchableOpacity
                      style={styles.modalButton}
                      onPress={choosePhotoFromLibrary}>
                      <Text style={styles.modalButtonText}>Choose from Gallery</Text>
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
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
    header: {
      backgroundColor: colors.primary,
      paddingVertical: vh(30),
      alignItems: 'center',
      borderBottomEndRadius: vw(30),
      borderBottomStartRadius: vw(30),
    },
    profileImage: {
      width: vw(120),
      height: vw(120),
      borderRadius: 60,
      marginBottom: vh(10),
    },
    changeImg: {
      color: 'white',
      fontWeight: '600',
    },
    infoContainer: {
      padding: vw(20),
      backgroundColor: 'white',
      borderRadius: 10,
      margin: vw(10),
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 5,
    },
    username: {
      fontSize: vw(18),
      fontWeight: 'bold',
      marginBottom: vh(10),
    },
    changeUsername: {
      marginTop: vh(10),
    },
    changeUsernameText: {
      color: colors.primary,
      fontSize: vw(16),
    },
    inputContainer: {
      marginTop: vh(10),
    },
    textInput: {
      borderWidth: 1,
      borderColor: 'lightgray',
      borderRadius: 5,
      paddingVertical: Platform.OS === 'ios' ? vh(7) : vh(2),
      marginBottom: vh(10),
      paddingHorizontal: vw(10),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textInputUsername: {
      borderWidth: 1,
      borderColor: 'lightgray',
      borderRadius: 5,
      paddingVertical: vh(10),
      marginBottom: vh(10),
      paddingHorizontal: vw(10),
    },
    button: {
      backgroundColor: colors.primary,
      padding: vw(10),
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: vw(16),
    },
    caution: {
      color: 'red',
      marginTop: vh(5),
    },
    separator: {
      height: 1,
      backgroundColor: 'lightgray',
      marginVertical: vh(10),
    },
    passwordLabel: {
      fontSize: vw(16),
      marginTop: vh(10),
      fontWeight: 'bold',
    },
    modalOverlay: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: vw(25),
      borderTopLeftRadius: vw(30),
      borderTopRightRadius: vw(30),
    },
    modalButton: {
      paddingVertical: vw(15),
    },
    modalButtonText: {
      textAlign: 'center',
      fontSize: vw(18),
      color: colors.primary,
    },
    icon: {
      width: vw(20),
      height: vw(20),
    },
    backCont: {
      //backgroundColor: '#343434',
      backgroundColor: colors.primary,
      paddingVertical: vh(10),
    },
    back: {
      marginTop: Platform.OS === 'ios' ? vh(50) : vh(10),
      marginLeft: vw(20),
      width: vw(20),
      height: vw(20),
    },
    backImg: {
      width: vw(20),
      height: vw(20),
    },
  });
  
  