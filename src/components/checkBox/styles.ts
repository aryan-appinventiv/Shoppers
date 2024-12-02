import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { vh, vw } from "../../utils/dimensions";

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.gray,
      paddingVertical: vh(8),
      paddingHorizontal: vw(16),
      borderRadius: vw(16),
    },
    selected: {
      borderColor: colors.primary, 
    },
    label: {
      color: colors.black,
    },
    icon: {
      height: vw(14),
      width: vw(14),
      marginLeft: vw(8),
    },
  });
  export default styles;
  