import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { vh, vw } from "../../utils/dimensions";

export const getPrivacyPolicyStyles = (isDarkMode: string) =>{
    return StyleSheet.create({
        container: {
          flex: 1,
          paddingHorizontal: vw(20),
          backgroundColor: isDarkMode? colors.black : colors.white,
        },
        title: {
          fontSize: vh(26),
          fontWeight: 'bold',
          marginBottom: vh(10),
          color: isDarkMode? colors.redTitle : colors.primary,
        },
        date: {
          fontSize: vh(16),
          color: colors.gray,
          marginBottom: vh(20),
        },
        sectionTitle: {
          fontSize: vw(18),
          fontWeight: 'bold',
          marginTop: vh(15),
          marginBottom: vh(5),
          color : isDarkMode? colors.white : colors.black,
        },
        sectionText: {
          fontSize: vw(14),
          lineHeight: vw(20),
          color: colors.desc,
        },
      });
} 
