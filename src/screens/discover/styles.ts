import { StyleSheet } from "react-native"
import { vh, vw } from "../../utils/dimensions"

const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    title:{
      paddingHorizontal: vw(15),
      fontSize: vw(18),
      fontWeight: '600',
      marginVertical: vh(10),
    },
    listContainer:{
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: vw(16),
      paddingHorizontal: vw(15),
      marginBottom: vh(20),
    },
    button:{
      marginHorizontal: vw(15),
    }
  })
  export default styles;