import React from 'react';
import RootNavigator from './src/navigators';
import { StatusBar } from 'react-native';
import { ThemeProvider } from './src/utils/ThemeContext';
import { colors } from './src/utils/colors';

const App = () => {
  return(
    <ThemeProvider>
    <StatusBar backgroundColor={colors.primary} barStyle="dark-content"/>
  <RootNavigator />
  </ThemeProvider>
)};

export default App;