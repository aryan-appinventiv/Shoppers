import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const getSavedStyles = (isDarkMode: string) =>{
    return StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: isDarkMode? colors.blackBackground : colors.searchbar,
        },
        emptyMessage: {
          fontSize: 16,
          textAlign: 'center',
          marginTop: 20,
        },
      });      
    }      
