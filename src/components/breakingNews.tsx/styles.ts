import { StyleSheet } from "react-native";
import { vh, vw } from "../../utils/dimensions";
import { colors } from "../../utils/colors";

export const getBreakingStyle = (isDarkMode: boolean) => {
    return StyleSheet.create({
        slideWrapper: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        container: {
          paddingHorizontal: vw(15),
        },
        title: {
          fontSize: vw(16),
          fontWeight: '600',
          letterSpacing: 1.2,
          padding: vw(5),
          marginBottom: vh(5),
          color: isDarkMode ? colors.white : colors.black,
        },
        dotsWrapper: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: vh(10),
        },
        dot: {
          width: vw(8),
          height: vw(8),
          borderRadius: vw(4),
          backgroundColor: colors.gray,
          marginHorizontal: vw(2),
        },
        activeDot: {
          backgroundColor: isDarkMode? colors.white: colors.black, 
        },
      });
      

}