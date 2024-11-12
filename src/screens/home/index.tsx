import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

const Home = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Fetch the current user's displayName (username) from Firebase Auth
    const currentUser = auth().currentUser;
    if (currentUser) {
      setUsername(currentUser.displayName);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome, {username || 'User'}!</Text>
      {/* Add other components or content here */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
});
