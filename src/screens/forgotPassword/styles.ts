import { Platform, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    title: {
        color: colors.primary,
        fontSize:25,
        fontWeight:'700',
        letterSpacing:2.4,
        lineHeight:25,
    },
    secondCont:{
        flex:2,
        paddingHorizontal:20,
        paddingVertical:50,
        alignItems:'center'
    },
    icon: {
        height: 20,
        width: 20,
    },
    textInput: {
        flex: 1,
        paddingRight: 25,
    }, 
    inputBox: {
        width: '100%',
        borderRadius: 5,
        marginVertical: 30,
        borderBottomWidth: 1,
        paddingVertical: Platform.OS === 'ios' ? 10 : 0,
        paddingHorizontal: 10,
        backgroundColor: colors.white,
        borderColor: colors.lightgray,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    desc:{
        color:colors.gray,
        fontWeight:'600',
        marginVertical:10,
        fontSize: 15,
    },
    register: {
        backgroundColor: colors.primary,
        width: '100%',
        padding: 15,
        alignItems: 'center',
        marginVertical: 30,
        borderRadius: 10,
    },
    registerTitle: {
        color: colors.white,
        fontSize: 16,
        fontWeight: '600',
    },
});
export default styles;