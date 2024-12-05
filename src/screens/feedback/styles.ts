import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { vh, vw } from "../../utils/dimensions";

export const getFeedbackStyles = (isDarkMode: string) =>{
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: isDarkMode? colors.black : colors.white,
          },
          title: {
            fontSize: vh(24),
            fontWeight: 'bold',
            marginBottom: vh(20),
            paddingHorizontal: vw(10),
            marginTop: vh(20),
            color: isDarkMode? colors.white : colors.black,
          },
          label: {
            fontSize: vh(16),
            marginBottom: vh(10),
            color: isDarkMode? colors.white : colors.black,
          },
          input: {
            height: vw(100),
            borderColor: colors.borderClr,
            borderWidth: 1,
            borderRadius: vw(5),
            padding: vh(10),
            marginBottom: vh(20),
            color: isDarkMode? colors.white : colors.black,
            textAlignVertical: 'top',
          },
          mainCont: {
            paddingHorizontal: vw(10),
          },
          backCont: {
            backgroundColor: colors.primary,
            paddingBottom: vh(20),
            paddingHorizontal: vw(10),
          },
          back: {
            height: vw(20),
            width: vw(20),
          },
          backImg: {
            height: vw(20),
            width: vw(20),
          },
      
      });
    }      
