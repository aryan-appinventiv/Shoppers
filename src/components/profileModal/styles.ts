import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { vh, vw } from "../../utils/dimensions";

export const getProfileModalStyles = (isDarkMode: boolean)=>{
       return StyleSheet.create({
        modalOverlay: {
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: colors.modalBackground,
          },
          modalContent: {
            backgroundColor: isDarkMode? colors.gray : colors.white,
            padding: vw(25),
            borderTopLeftRadius: vw(30),
            borderTopRightRadius: vw(30),
          },
          modalButton: {
            paddingVertical: vw(15),
            flexDirection: 'row',
            gap: vw(20),
            paddingHorizontal: vw(20),
          },
          modalButtonText: {
            textAlign: 'center',
            fontSize: vw(18),
            color: colors.primary,
          },
          separator: {
            height: 1,
            backgroundColor: colors.lightgray,
            marginVertical: vh(10),
          },
          remove_img : {
            fontWeight: '600'
          },
          icon:{
            height: vw(20),
            width: vw(20),
          }
    }) 
} 