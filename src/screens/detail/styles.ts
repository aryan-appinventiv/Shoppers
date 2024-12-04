import { Platform, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { vh, vw } from "../../utils/dimensions";

export const getDetailStyles = (isDarkMode: string) =>{
    return StyleSheet.create({
        container: {
          flex: 1,
          paddingHorizontal: vw(16),
          backgroundColor: isDarkMode? colors.black: colors.white,
        },
        content: {
          marginBottom: vh(20),
        },
        image: {
          width: '100%',
          height: vh(200),
          borderRadius: vw(10),
          marginVertical: vh(20),
          resizeMode:'contain',
        },
        title: {
          fontSize: vw(20),
          fontWeight: 'bold',
          marginBottom: vh(10),
          color : isDarkMode? colors.white: colors.black,
        },
        category: {
          fontSize: vw(16),
          color: isDarkMode? colors.lightgray : colors.gray,
          marginBottom: vh(10),
        },
        source: {
          fontSize: vw(14),
          color: isDarkMode? colors.lightgray : colors.gray,
        },
        desc: {
          fontSize: vw(15),
          color:isDarkMode? colors.lightgray : colors.desc,
          letterSpacing: 1.2,
          textAlign: 'justify',
          marginVertical: vh(10),
          fontWeight: '600',
        },
        sourceIcon: {
          height: vw(25),
          width: vw(25),
          borderRadius: vw(15),
        },
        sourceCont: {
          flexDirection: 'row',
          alignItems: 'center',
          gap: vw(3),
        },
        icon: {
          width: vw(20),
          height: vw(20),
          tintColor: isDarkMode? colors.white: colors.black,
        },
        backButton:{
          width: vw(30),
          height: vw(30),
          justifyContent:'center',
          alignItems:'center',
        },
        header: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: Platform.OS === 'ios' ? vh(60) : vh(30),
          paddingHorizontal: vw(5),
          alignItems: 'center',
        },
        keyword: {
          fontSize: vw(14),
          fontWeight: '600',
          color: isDarkMode? colors.white : colors.black,
        },
        keywords: {
          fontSize: vw(14),
          color: isDarkMode? colors.lightgray : colors.gray,
        },
        viewCont: {
          flexDirection: 'row',
          flexWrap: 'wrap',
        },
      });
    }      
