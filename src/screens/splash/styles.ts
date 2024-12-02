import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { Wwidth } from "../../utils/dimensions";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.white,
    },
    splashGif: {
      height: Wwidth / 2,
      width: Wwidth / 2,
    }
  });
  export default styles;