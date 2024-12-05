import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const getTermsStyles = (isDarkMode: string) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: isDarkMode ? colors.black : colors.white,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      color: isDarkMode ? colors.redTitle : colors.primary,
    },
    date: {
      fontSize: 16,
      color: colors.gray,
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 15,
      marginBottom: 5,
      color: isDarkMode ? colors.white : colors.black,
    },
    sectionText: {
      fontSize: 14,
      lineHeight: 20,
      color: isDarkMode ? colors.lightgray : colors.desc,
    },
  });
};
