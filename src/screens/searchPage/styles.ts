import { Platform, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { vh, vw } from "../../utils/dimensions";

 export const getSearchedPageStyles = (isDarkMode: boolean, disable: boolean) => {
    return StyleSheet.create({
        container:{
            flex: 1,
            backgroundColor: isDarkMode? colors.black: colors.white,
        },
        searchBar: {
          backgroundColor: colors.searchbar,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: vw(10),
          paddingVertical: Platform.OS === 'ios' ? vh(10) : vh(6),
          borderRadius: vh(10),
          gap: vh(10),
          marginVertical: 10,
          flex: 1,
        },
        searchTxt: {
          flex: 1,
          color: colors.blackBackground,
        },
        logo: {
          width: vw(20),
          height: vw(20),
        },
        searchCont: {
          flexDirection: 'row',
          gap: vw(10),
          marginHorizontal: vw(15),
        },
        searchBtn: {
          alignSelf: 'center',
          backgroundColor: colors.primary,
          paddingHorizontal: vw(10),
          paddingVertical: Platform.OS === 'ios' ? vh(10) : vh(15),
          borderRadius: vh(10),
          opacity: disable? 0.5 : 1,
        },
        searchBtnTxt: {
          color: colors.white,
          fontSize: vw(14),
        },
        emptyMessage: {
            fontSize: 16,
            textAlign: 'center',
            marginTop: 20,
            color: isDarkMode? colors.white: colors.blackBackground,
        },
        mainCont:{
            flex: 1,
        }
      });
}