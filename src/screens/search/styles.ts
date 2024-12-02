import { Platform, StyleSheet } from "react-native";
import { vh, vw } from "../../utils/dimensions";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    title: {
      fontSize: vw(22),
      fontWeight: 'bold',
    },
    back: {
      height: vw(25),
      width: vw(25),
    },
    headerCont: {
      paddingHorizontal: vw(15),
      flexDirection: 'row',
      gap: vw(20),
      marginBottom: vw(5),
      alignItems: 'center',
      paddingTop: Platform.OS === 'android' ? vh(15) : vh(5),
      paddingBottom: vh(10),
    },
  });
  export default styles;
  