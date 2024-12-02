import { StyleSheet } from "react-native";
import { vh, vw } from "../../utils/dimensions";
import { colors } from "../../utils/colors";

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: vw(15),
    },
    title: {
      fontSize: vw(16),
      fontWeight: '600',
      letterSpacing: 1.2,
      padding: vw(5),
      marginVertical: vh(10),
    },
    itemsWrapper: {
      gap: 20,
    },
    item: {
      borderWidth: 1,
      borderColor: colors.darkgray,
      paddingVertical: vh(10),
      paddingHorizontal: vw(16),
      borderRadius: vw(10),
    },
    itemText: {
      color: colors.gray,
      letterSpacing: 0.5,
    },
    itemActive:{
      backgroundColor: colors.primary,
      borderColor: colors.primary,
    },
    itemTextActive:{
      fontWeight: '600',
      color: colors.white,
    }
  });
  export default styles;  
  