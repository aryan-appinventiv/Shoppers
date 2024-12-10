import { StyleSheet } from "react-native"
import { vh, vw } from "../../utils/dimensions"
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    backCont: {
        backgroundColor: colors.primary,
        paddingBottom: vh(20),
        paddingHorizontal: vw(10),
        flexDirection: 'row',
        alignItems: 'center',
        gap: vw(15),
      },
      back: {
        height: vw(20),
        width: vw(20),
        alignItems:'center',
        justifyContent:'center',
      },
      backImg: {
        height: vw(17),
        width: vw(17),
      },
      title: {
        fontSize: vh(22),
        fontWeight: 'bold',
        color: colors.white,
      },
})
