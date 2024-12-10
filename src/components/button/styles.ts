import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { vh } from "../../utils/dimensions";

const styles = StyleSheet.create({
    register: {
        backgroundColor: colors.primary,
        width: '100%',
        padding: vh(13),
        alignItems: 'center',
        marginVertical: vh(30),
        borderRadius: vh(10),
    },
    registerTitle: {
        color: colors.white,
        fontSize: vh(16),
        fontWeight: '600',
    },
})
export default styles;