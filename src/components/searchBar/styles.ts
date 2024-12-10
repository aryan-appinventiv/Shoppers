import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { vh, vw } from "../../utils/dimensions";

const styles = StyleSheet.create({
    searchBar: {
      backgroundColor: colors.searchbar,
      marginHorizontal: vw(15),
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: vw(10),
      paddingVertical: vh(10),
      borderRadius: vh(10),
      gap: vh(10),
      marginVertical: vh(15),
    },
    searchTxt: {
      flex: 1,
      color: colors.darkgray,
    },
    logo: {
      width: vw(20),
      height: vw(20),
    },
  });
  export default styles;