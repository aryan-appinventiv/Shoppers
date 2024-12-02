import { Platform, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { vh, vw } from "../../utils/dimensions";

export const getProfileStyles = (isDarkMode: string) =>{
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: isDarkMode? colors.blackBackground : colors.searchbar,
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
            color: colors.white,
            fontWeight: '600',
          },
          infoContainer: {
            padding: vw(20),
            backgroundColor: isDarkMode? colors.black : colors.white,
            borderRadius: 10,
            margin: vw(10),
            shadowColor: colors.black,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 5,
          },
          username: {
            fontSize: vw(18),
            fontWeight: 'bold',
            marginBottom: vh(10),
            color : isDarkMode ? colors.white : colors.black,
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
            borderColor: colors.lightgray,
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
            borderColor: colors.lightgray,
            borderRadius: 5,
            paddingVertical: vh(10),
            marginBottom: vh(10),
            paddingHorizontal: vw(10),
            color : isDarkMode? colors.white : colors.black,
          },
          button: {
            backgroundColor: colors.primary,
            padding: vw(10),
            borderRadius: 5,
            alignItems: 'center',
          },
          buttonText: {
            color: colors.white,
            fontSize: vw(16),
          },
          caution: {
            color: colors.red,
            marginTop: vh(5),
          },
          separator: {
            height: 1,
            backgroundColor: colors.lightgray,
            marginVertical: vh(10),
          },
          passwordLabel: {
            fontSize: vw(16),
            marginTop: vh(10),
            fontWeight: 'bold',
            color : isDarkMode ? colors.white : colors.black,
          },
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
          },
          modalButtonText: {
            textAlign: 'center',
            fontSize: vw(18),
            color: colors.primary,
          },
          icon: {
            width: vw(20),
            height: vw(20),
            tintColor: isDarkMode? colors.white : colors.black,
          },
          backCont: {
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
          inputStyle: {
            flex: 1,
            color: isDarkMode ? colors.white : colors.black,
          }
      
      });
    }      
