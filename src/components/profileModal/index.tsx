import React from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { strings } from '../../utils/strings';
import { useTheme } from '../../utils/ThemeContext';
import { getProfileModalStyles } from './styles';
import { images } from '../../assets';

type ProfileModalProps = {
  modalVisible: boolean;
  toggleModal: () => void;
  takePhotoFromCamera: () => void;
  choosePhotoFromLibrary: () => void;
  removeImg: () => void;
};

const ProfileModal: React.FC<ProfileModalProps> = ({
  modalVisible,
  toggleModal,
  takePhotoFromCamera,
  choosePhotoFromLibrary,
  removeImg,
}) => {
  const { isDarkMode } = useTheme();
  const styles = getProfileModalStyles(isDarkMode);

  return (
    <Modal transparent visible={modalVisible} animationType="fade">
      <TouchableWithoutFeedback onPress={toggleModal}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={takePhotoFromCamera}
            >
              <Image source={images.camera} style={styles.icon} />
              <Text style={styles.modalButtonText}>{strings.open_camera}</Text>
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity
              style={styles.modalButton}
              onPress={choosePhotoFromLibrary}
            >
              <Image source={images.gallery} style={styles.icon} />
              <Text style={styles.modalButtonText}>
                {strings.choose_from_gallery}
              </Text>
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity style={styles.modalButton} onPress={removeImg}>
              <Image source={images.bin} style={styles.icon} />
              <Text style={[styles.modalButtonText, styles.remove_img]}>
                {strings.remove_img}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ProfileModal;

const styles = StyleSheet.create({});
