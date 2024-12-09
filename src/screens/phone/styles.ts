import { StyleSheet } from "react-native";
import { vh, vw } from "../../utils/dimensions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  secondCont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: vw(15),
  },
  heading: {
    fontSize: vh(24),
    fontWeight: 'bold',
    marginBottom: vh(20),
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: vh(8),
    marginBottom: vh(20),
    paddingHorizontal: vw(10),
    height: vh(50),
    width: '80%',
  },
  icon: {
    width: vh(24),
    height: vh(24),
    marginRight: vw(10),
  },
  textInput: {
    flex: 1,
    fontSize: vh(16),
  },
});
export default styles;
