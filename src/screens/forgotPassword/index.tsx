import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert, Image, Platform, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import Header from '../../components/header';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../utils/colors';
import { images } from '../../assets';
import Toast from 'react-native-simple-toast';
import { strings } from '../../utils/strings';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const Navigation = useNavigation();

  
    const handlePasswordReset = async () => {
        if (!email) {
            Toast.show(strings.enter_email, Toast.SHORT, {
                backgroundColor: colors.orange,
              });
            return;
        }

        setLoading(true);
        try {
            await auth().sendPasswordResetEmail(email);
            Toast.show(strings.reset_email_send, Toast.LONG, {
                backgroundColor: colors.green,
              });
            setEmail(''); 
            Navigation.navigate('Signin')
        } catch (error: any) {
            Toast.show(error.message, Toast.SHORT, {
                backgroundColor: colors.red,
            });
        } finally {
            setLoading(false);
        }
    };
    const goBack=()=>{
        Navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Header onPress={goBack}/>
            <View style={styles.secondCont}>
            <Text style={styles.title}>{strings.reset_password}</Text>
            <Text style={styles.desc}>{strings.reset_pass_link_send}</Text>
            <View style={styles.inputBox}>
                    <Image source={images.mail} style={styles.icon} />
                    <TextInput
                        value={email}
                        onChangeText={text => setEmail(text)}
                        placeholder= {strings.email_address}
                        autoCapitalize="none"
                        style={styles.textInput}
                    />
                </View>
             <TouchableOpacity onPress={handlePasswordReset} style={styles.register} disabled={loading}>
                    <Text style={styles.registerTitle}>{loading ? strings.sending : strings.send_password_reset_email}</Text>
             </TouchableOpacity>
            </View>
        </View>
    );
};

export default ForgotPassword;

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
