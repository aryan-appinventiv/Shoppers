import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import { colors } from '../../utils/colors';
import { useTheme } from '../../utils/ThemeContext';

interface LogoutModalProps{
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  desc: string;
}

const LogoutModal: React.FC<LogoutModalProps> = ({
  visible,
  onClose,
  onConfirm,
  title,
  desc,
}) => {
  const { isDarkMode } = useTheme();

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View
          style={[
            styles.modalContent,
            { backgroundColor: isDarkMode ? colors.darkgray : colors.white },
          ]}
        >
          <Text style={styles.modalTitle}>{title}</Text>
          <Text
            style={[
              styles.modalSubtitle,
              { color: isDarkMode ? colors.white : colors.black },
            ]}
          >
            {desc}
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={onClose}
              style={[
                styles.cancelButton,
                { backgroundColor: isDarkMode ? colors.black : colors.borderClr },
              ]}
            >
              <Text
                style={[
                  styles.buttonText,
                  { color: isDarkMode ? colors.white : colors.black },
                ]}
              >
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onConfirm} style={styles.okButton}>
              <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LogoutModal;
