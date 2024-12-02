import React from 'react';
import RootNavigator from './src/navigators';
import { Platform, StatusBar } from 'react-native';
import { ThemeProvider } from './src/utils/ThemeContext';
import { colors } from './src/utils/colors';

const App = () => {
  return(
    <ThemeProvider>
    <StatusBar backgroundColor={colors.primary} barStyle={Platform.OS === "android"? "light-content": "dark-content"} />
  <RootNavigator />
  </ThemeProvider>
)};

export default App;