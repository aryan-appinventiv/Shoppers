import {
    Alert,
    Image,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { images } from '../../assets';
import { colors } from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/header';
import Button from '../../components/button';

const RegisterWithEmail = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const Navigation = useNavigation();

    const onRegister = () => {
        if (password !== confirmPassword) {
            Alert.alert("Passwords do not match");
            return;
        }
        if (!name) {
            Alert.alert("Username cannot be null");
            return;
        }

        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                const user = auth().currentUser;

                // Update user's display name
                user.updateProfile({
                    displayName: name,
                })
                .then(() => {
                    console.log('User account created and name updated');

                    // Send verification email
                    user.sendEmailVerification()
                        .then(() => {
                            Alert.alert(
                                'Verification email sent',
                                'Please check your inbox to verify your email before logging in.'
                            );
                        })
                        .catch(error => {
                            console.error("Error sending verification email:", error);
                        });

                    // Clear input fields
                    setName('');
                    setEmail('');
                    setPassword('');
                    setConfirmPassword('');

                    // Navigate to Signin screen
                    Navigation.navigate('Signin');
                })
                .catch(error => {
                    console.error("Error updating profile:", error);
                    Alert.alert("Error updating user profile");
                });
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    Alert.alert('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    Alert.alert('That email address is invalid!');
                }
                console.error(error);
                Alert.alert("Error during registration");
            });
    };
    const goBack=()=>{
        Navigation.goBack();
    }

    return (
        <View style={styles.Container}>
            <Header onPress={goBack} />
            <View style={styles.secondCont}>
                <Text style={styles.heading}>Create an Account</Text>
                <View style={styles.inputBox}>
                    <Image source={images.mail} style={styles.icon} />
                    <TextInput
                        value={name}
                        onChangeText={text => setName(text)}
                        placeholder="Username"
                        autoCapitalize="none"
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.inputBox}>
                    <Image source={images.mail} style={styles.icon} />
                    <TextInput
                        value={email}
                        onChangeText={text => setEmail(text)}
                        placeholder="Email Address"
                        autoCapitalize="none"
                        style={styles.textInput}
                    />
                </View>

                <View style={styles.inputBox}>
                    <Image source={images.password} style={styles.icon} />
                    <TextInput
                        value={password}
                        onChangeText={text => setPassword(text)}
                        placeholder="Password"
                        autoCapitalize="none"
                        secureTextEntry={!passwordVisible}
                        style={styles.textInput}
                    />
                    <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                        <Image
                            source={passwordVisible ? images.hide : images.view}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.inputBox}>
                    <Image source={images.password} style={styles.icon} />
                    <TextInput
                        value={confirmPassword}
                        onChangeText={text => setConfirmPassword(text)}
                        placeholder="Confirm Password"
                        autoCapitalize="none"
                        secureTextEntry={!confirmPasswordVisible}
                        style={styles.textInput}
                    />
                    <TouchableOpacity onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
                        <Image
                            source={confirmPasswordVisible ? images.hide : images.view}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
                <Button onPress={onRegister} title={"Register"}/>
            </View>
        </View>
    );
};

export default RegisterWithEmail;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'white',
    },
    secondCont: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 50,
        paddingHorizontal: 20,
    },
    inputBox: {
        width: '100%',
        borderRadius: 5,
        marginVertical: 10,
        borderBottomWidth: 1,
        paddingVertical: Platform.OS === 'ios' ? 10 : 0,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        borderColor: 'lightgray',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    heading: {
        color: colors.primary,
        fontSize: 25,
        fontWeight: '700',
        letterSpacing: 1.8,
        lineHeight: 25,
        marginBottom: 50,
    },
    icon: {
        height: 20,
        width: 20,
    },
    textInput: {
        flex: 1,
        paddingRight: 25,
    },
});
