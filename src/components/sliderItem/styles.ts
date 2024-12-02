import { StyleSheet } from "react-native";
import { vh, vw, Wwidth } from "../../utils/dimensions";
import { colors } from "../../utils/colors";

const styles = StyleSheet.create({
    itemWrapper:{
        width:Wwidth,
    },
    image:{
        width: Wwidth-40,
        height:Wwidth/2,
        borderRadius:vw(20),
    },
    title:{
        color:colors.white,
        fontSize:17,
        fontWeight:'700',
        marginHorizontal: vw(8),
    },
    background:{
        position:'absolute',
        top:0,
        borderRadius:20,
        width: Wwidth-40,
        height: Wwidth/2,
    },
    sourceIcon:{
        width: vw(25),
        height: vw(25),
        borderRadius: vw(20),
        resizeMode: 'stretch',
    },
    sourceInfo:{
        flexDirection:'row',
        paddingHorizontal:vw(20),
        alignItems:'center',
        gap: vw(10),
    },
    sourceName:{
        color: colors.white,
        fontSize: vw(13),
        fontWeight: '600',
    },
    sourceCont:{
        flex:1,
        justifyContent:'flex-end',
        paddingBottom: vh(20),
        gap:vh(10),
    }
})
export default styles;