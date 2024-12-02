import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { vh, vw } from "../../utils/dimensions";

export const getSavedStyles = (isDarkMode: string) =>{
    return StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: isDarkMode? colors.blackBackground : colors.searchbar,
        },
        newsItem: {
          padding: vw(16),
          borderBottomWidth: 1,
          borderBottomColor: colors.borderClr,
          flexDirection: 'row',
          alignItems: 'center',
          gap: vh(10),
          backgroundColor: isDarkMode? colors.black : colors.white,
        },
        emptyMessage: {
          fontSize: 16,
          textAlign: 'center',
          marginTop: 20,
        },
        itemImg: {
          height: vw(80),
          width: vw(80),
          borderRadius: vw(20),
        },
        itemInfo: {
          flex: 1,
          gap: vh(10),
          justifyContent: 'space-between',
        },
        itemCategory: {
          fontSize: vw(12),
          color: isDarkMode? colors.lightgray : colors.gray,
          textTransform: 'capitalize',
        },
        itemTitle: {
          fontSize: vw(12),
          fontWeight: '600',
          color: isDarkMode? colors.white : colors.black,
        },
        itemSourceInfo: {
          flexDirection: 'row',
          gap: vw(8),
          alignItems: 'center',
        },
        itemSourceImg: {
          width: vw(20),
          height: vw(20),
          borderRadius: vw(20),
        },
        itemSourceName: {
          fontSize: vh(10),
          fontWeight: '400',
          color: isDarkMode? colors.lightgray : colors.gray,
        },
      });      
    }      
