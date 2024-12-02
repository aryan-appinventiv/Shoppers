import { Text, View , TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { OtpInput } from "react-native-otp-entry";
import { useNavigation } from '@react-navigation/native';
import { strings } from '../../utils/strings';
import styles from './styles';

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

