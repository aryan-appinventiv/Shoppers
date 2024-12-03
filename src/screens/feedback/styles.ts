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
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 20,
            paddingHorizontal: vw(10),
            marginTop: vh(20),
            color: isDarkMode? colors.white : colors.black,
          },
          label: {
            fontSize: 16,
            marginBottom: 10,
            color: isDarkMode? colors.white : colors.black,
          },
          input: {
            height: 100,
            borderColor: colors.borderClr,
            borderWidth: 1,
            borderRadius: 5,
            padding: 10,
            marginBottom: 20,
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
