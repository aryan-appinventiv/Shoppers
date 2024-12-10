import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
} from 'react-native';
import {images} from '../../assets'; // Replace with your actual assets path

const ContactUs = () => {
  const openEmail = () => {
    const email = 'aryan.saxena@appinventiv.com'; // Replace with your email address
    const mailto = `mailto:${email}`;

    Linking.canOpenURL(mailto)
      .then(supported => {
        if (supported) {
          Linking.openURL(mailto);
        } else {
          console.log('Email client is not available');
        }
      })
      .catch(error => console.error('Error opening email client:', error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <TouchableOpacity onPress={openEmail} style={styles.button}>
        <Image source={images.mail} style={styles.icon} />
        <Text style={styles.buttonText}>Send Us an Email</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(`mailto:aryan.saxena@appinventiv.com`);
        }}
        style={{backgroundColor:'red'}}
        >
        <Image source={images.mail} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: '#fff',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default ContactUs;
