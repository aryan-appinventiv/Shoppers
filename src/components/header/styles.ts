import { Platform, StyleSheet } from "react-native";
import { vh, vw } from "../../utils/dimensions";

const styles = StyleSheet.create({
    firstCont: {
      flex: 1,
    },
    bcImg: {
      width: '100%',
      flex: 1,
    },
    back: {
      height: vw(25),
      width: vw(25),
    },
    backCont: {
      position: 'absolute',
      top: Platform.OS === 'ios' ? vh(50) : vh(20),
      left: vw(20),
    },
  });
  export default styles;
  