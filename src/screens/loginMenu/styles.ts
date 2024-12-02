import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    wrapper: {
      flex: 1,
    },
   
    background: {
      flex: 1,
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      justifyContent: 'flex-end',
    },
    insideContainer: {
      flex:1,
      alignItems:'center',
      justifyContent:'flex-end',
      paddingBottom:50,
      paddingHorizontal:20,
    },
    title:{
      color: colors.primary,
      fontSize:25,
      fontWeight:'700',
      letterSpacing:2.4,
      lineHeight:25,
    },
    desc:{
      color: colors.gray,
      letterSpacing:2,
      fontWeight:'600',
      marginVertical:20,
      fontSize:15,
    },
    alreadyAcc:{
      flexDirection:'row',
      gap:5,
      paddingTop:30
    },
    alreadyAccText1:{
      color: colors.gray,
      fontWeight:'500',
    },
    alreadyAccText2:{
      color:colors.purple,
      fontWeight:'600',
    },
    animatedView:{
      width:'100%',
    }
  });
  export default styles;
  