import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { vh, vw } from "../../utils/dimensions";

const styles = StyleSheet.create({
    touchable: {
      marginVertical: vh(10),
      borderWidth: 1,
      borderRadius: vw(20),
      borderColor: colors.darkgray,
      flexDirection: 'row',
      gap: vh(10),
      paddingVertical: vh(10),
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    icon: {
      height: vh(20),
      width: vh(20),
    },
    iconDesc: {
      fontWeight: '600',
      fontSize: vw(16),
    },
  });
  export default styles;