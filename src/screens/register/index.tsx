import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';

const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onRegister = () => {

    auth().createUserWithEmailAndPassword(email,password).then(()=>{
        console.log("User account created");
    }).catch(error=>{
        // if (error.code === 'auth/email-already-in-use') {
        //     console.log('That email address is already in use!');
        // }
      
        // if (error.code === 'auth/invalid-email') {
        //     console.log('That email address is invalid!');
        // }
      
        console.error(error);
    })
  };

  return (
    <View style={styles.container}>
      <Text style={styles.signup}>Signup Screen</Text>

      <TextInput
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="Email"
        style={styles.inputBox}
      />

      <TextInput
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder="Password"
        style={styles.inputBox}
      />
      
      <TouchableOpacity onPress={onRegister} style={styles.register}>
        <Text style={styles.registerTitle}>Register</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signup: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  inputBox: {
    width: '80%',
    borderRadius: 5,
    marginVertical: 10,
    borderWidth: 1,
    padding: 5,
  },
  register: {
    backgroundColor: 'orange',
    marginTop: 20,
    borderRadius: 5,
    width: '80%',
  },
  registerTitle: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    paddingVertical: 10,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
});
