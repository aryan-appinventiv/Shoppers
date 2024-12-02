import { Platform, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    secondCont: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingVertical: 50,
      paddingHorizontal: 20,
    },
    inputBox: {
      width: '100%',
      borderRadius: 5,
      marginVertical: 10,
      borderBottomWidth: 1,
      paddingVertical: Platform.OS === 'ios' ? 10 : 0,
      paddingHorizontal: 10,
      backgroundColor: colors.white,
      borderColor: colors.lightgray,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
  
    heading: {
      color: colors.primary,
      fontSize: 25,
      fontWeight: '700',
      letterSpacing: 1.8,
      lineHeight: 25,
      marginBottom: 50,
    },
  
    icon: {
      height: 20,
      width: 20,
    },
    textInput: {
      flex: 1,
      paddingRight: 25,
      fontSize:18,
    },
  });
  export default styles;  
  