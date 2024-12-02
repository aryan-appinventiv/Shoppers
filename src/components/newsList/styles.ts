// import { StyleSheet } from "react-native"
// import { vh, vw } from "../../utils/dimensions";
// import { colors } from "../../utils/colors";


// export const newsListStyles = (isDarkMode) => {
//     return StyleSheet.create({
//         container: {
//           paddingHorizontal: vw(15),
//           paddingVertical: vh(20),
//         },
//         itemContainer: {
//           flexDirection: 'row',
//           alignItems: 'center',
//           flex: 1,
//           gap: vh(10),
//           marginBottom: vh(20),
//         },
//         itemImg: {
//           height: vw(110),
//           width: vw(100),
//           borderRadius: vw(20),
//         },
//         itemInfo: {
//           flex: 1,
//           gap: vh(10),
//           justifyContent: 'space-between',
//         },
//         itemCategory: {
//           fontSize: vw(12),
//           color: colors.gray,
//           textTransform: 'capitalize',
//         },
//         itemTitle: {
//           fontSize: vw(12),
//           fontWeight: '600',
//           color: colors.black,
//         },
//         itemSourceInfo: {
//           flexDirection: 'row',
//           gap: vw(8),
//           alignItems: 'center',
//         },
//         itemSourceImg: {
//           width: vw(20),
//           height: vw(20),
//           borderRadius: vw(20),
//         },
//         itemSourceName: {
//           fontSize: vh(10),
//           fontWeight: '400',
//           color: colors.gray,
//         },
//       });      
// }



import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { vh, vw } from "../../utils/dimensions";

export const getNewslistStyles = (isDarkMode: string) =>{
    return StyleSheet.create({
        container: {
          paddingHorizontal: vw(15),
          paddingVertical: vh(20),
          backgroundColor: isDarkMode? colors.black : colors.white,
        },
        itemContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1,
          gap: vh(10),
          marginBottom: vh(20),
        },
        itemImg: {
          height: vw(110),
          width: vw(100),
          borderRadius: vw(20),
        },
        itemInfo: {
          flex: 1,
          gap: vh(10),
          justifyContent: 'space-between',
        },
        itemCategory: {
          fontSize: vw(12),
          color: colors.gray,
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
