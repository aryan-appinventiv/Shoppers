import { StyleSheet } from "react-native";
import { vh, vw } from "../../utils/dimensions";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: vw(16),
    },
    itemBtn: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: vw(16),
      paddingVertical: vh(20),
      marginBottom: 1,
      alignItems: 'center',
    },
    itemBtnTxt: {
      fontSize: vw(14),
      fontWeight: '500',
    },
    itemImg: {
      height: vw(15),
      width: vw(15),
    },
  });
  export default styles;