import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { OtpInput } from "react-native-otp-entry";
import { colors } from '../../utils/colors';

const OTP = (props) => {
    const [code, setCode] = useState('');

    async function confirmCode(confirm) {
        try {
          await confirm.confirm(code);
          console.log("Logged in");
        } catch (error) {
          console.log('Invalid code.');
        }
      }

  return (
    <View>
      
       <OtpInput numberOfDigits={6} value={code} onTextChange={(text) => setCode(text)} />

       <TouchableOpacity onPress={() => confirmCode(props.confirm)} style={styles.login}>
          <Text style={styles.loginTitle}>Send OTP</Text>
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
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
})