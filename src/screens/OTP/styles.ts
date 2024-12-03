import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const styles = StyleSheet.create({
    login: {
      backgroundColor: colors.primary,
      width: '100%',
      padding: 15,
      alignItems: 'center',
      marginVertical: 30,
      borderRadius: 10,
      alignSelf:'center',
    },
    loginTitle: {
      color: colors.white,
      fontSize: 16,
      fontWeight: '600',
    },
  })
  export default styles; 