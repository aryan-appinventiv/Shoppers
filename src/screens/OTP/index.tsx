import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { OtpInput } from "react-native-otp-entry";
import { colors } from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';
import { strings } from '../../utils/strings';

const OTP = (props) => {
    const [code, setCode] = useState('');
    const Navigation = useNavigation();

    async function confirmCode(confirm) {
        try {
          await confirm.confirm(code);
          console.log(strings.log_in);
          Navigation.reset({
            index:0,
            routes:[{name: 'BottomTabNavigator'}]
          })

        } catch (error) {
          console.log(strings.invalid_code);
        }
      }

  return (
    <View>
      
       <OtpInput numberOfDigits={6} value={code} onTextChange={(text) => setCode(text)} />

       <TouchableOpacity onPress={() => confirmCode(props.confirm)} style={styles.login}>
          <Text style={styles.loginTitle}>{strings.send_OTP}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default OTP

const styles = StyleSheet.create({
  login: {
    backgroundColor: colors.primary,
    width: '100%',
    padding: 15,
    alignItems: 'center',
    marginVertical: 30,
    borderRadius: 10,
    alignSelf:'center',
  },
  loginTitle: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
})