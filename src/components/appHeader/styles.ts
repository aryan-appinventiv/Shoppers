import { Platform, StyleSheet } from "react-native"
import { vh, vw } from "../../utils/dimensions"
import { colors } from "../../utils/colors"

export const getHeaderStyle = (isDarkMode) =>{
    return StyleSheet.create({
        userImg: {
            width: vw(60),
            height: vw(60),
          },
          userCont: {
            paddingTop: Platform.OS === 'ios' ? vh(50) : vh(7),
            paddingRight: vw(15),
            paddingLeft: vw(7),
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            backgroundColor: isDarkMode? colors.black : colors.white,
          },
          logo: {
            width: vw(25),
            height: vw(25),
          },
          userCont1:{
            flexDirection:'row',
            alignItems:'center',
          },
          welcome:{
            color: isDarkMode? colors.lightgray : colors.gray,
            fontWeight:'600',
          },
          name:{
            fontSize: vh(16),
            fontWeight:'700',
            color: isDarkMode? colors.white : colors.black,
          },
    })
}