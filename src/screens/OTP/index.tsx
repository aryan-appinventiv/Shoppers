import { Text, View , TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { OtpInput } from "react-native-otp-entry";
import { useNavigation } from '@react-navigation/native';
import { strings } from '../../utils/strings';
import styles from './styles';
import Toast from 'react-native-simple-toast';
import { colors } from '../../utils/colors';
import Button from '../../components/button';

const OTP = (props : any) => {
    const [code, setCode] = useState('');
    const Navigation = useNavigation();

    async function confirmCode(confirm:any) {
        try {
          await confirm.confirm(code);
          Toast.show(strings.log_in, Toast.SHORT, {
            backgroundColor: colors.green,
          });
          Navigation.reset({
            index:0,
            routes:[{name: 'BottomTabNavigator'}]
          })

        } catch (error) {
          Toast.show(strings.invalid_code, Toast.LONG, {
            backgroundColor: colors.primary,
          });
        }
      }

  return (
    <View style={styles.cont}>
      
       <OtpInput numberOfDigits={6} value={code} onTextChange={(text) => setCode(text)} />
       <Button title={"Send OTP"} onPress={() =>  confirmCode(props.confirm)} />
    </View>
  )
}

export default OTP

