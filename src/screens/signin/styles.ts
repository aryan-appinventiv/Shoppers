import { Platform, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { vh, vw } from "../../utils/dimensions";

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: colors.white,
    },

    secondCont: {
      flex: 2,
      paddingVertical: vh(50),
      paddingHorizontal: vw(20),
    },
    inputBox: {
      width: '100%',
      borderRadius: vw(5),
      marginVertical: vh(10),
      borderBottomWidth: 1,
      paddingVertical: Platform.OS === 'ios' ? vh(10) : 0,
      paddingHorizontal: vw(10),
      backgroundColor: colors.white,
      borderColor: colors.lightgray,
      flexDirection: 'row',
      alignItems: 'center',
      gap: vw(10),
    },
  
    heading: {
      color: colors.primary,
      fontSize: vw(25),
      fontWeight: '700',
      letterSpacing: 1.8,
      lineHeight: vw(25),
      marginBottom: vh(30),
      paddingHorizontal: vw(10),
    },
  
    icon: {
      height: vh(20),
      width: vh(20),
    },
    textInput: {
      flex: 1,
      paddingRight: vw(25),
    },
    forgotCont:{
      alignSelf:'flex-end',
    },
    forgotText:{
      fontWeight: '600'
    },
    error:{
      color: colors.red,
      marginBottom: vh(10),
    },
    keyboardAvoiding:{
      flex: 1,
    }
  });

  export default styles;
  
  







