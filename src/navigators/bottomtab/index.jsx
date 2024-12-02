import React from 'react';
import {Image, Platform, StyleSheet, View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/home';
import Discover from '../../screens/discover';
import Saved from '../../screens/saved';
import Settings from '../../screens/settings';
import {images} from '../../assets';
import {colors} from '../../utils/colors';
import {vh, vw} from '../../utils/dimensions';
import {useTheme} from '../../utils/ThemeContext';

const Tab = createBottomTabNavigator();

const TabIcon = ({focused, source, activeSource}) => {
  return (
    <View style={styles.tabbarView}>
      <Image
        source={focused ? activeSource : source}
        style={{
          width: focused ? vw(28) : vw(25),
          height: focused ? vh(28) : vh(25),
          tintColor: focused ? colors.primary : '#808080',
        }}
        resizeMode="contain"
      />
      {focused ? <View style={styles.line} /> : null}
    </View>
  );
};

const BottomTabNavigator = () => {
  const {isDarkMode} = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: isDarkMode? colors.blackBackground : colors.white,
          height: Platform.OS === 'ios' ? vh(70) : vh(60),
          paddingTop: vh(10),
        },
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => {
          let source;
          let activeSource;

          if (route.name === 'Home') {
            source = images.home;
            activeSource = images.home1;
          } else if (route.name === 'Discover') {
            source = images.discover;
            activeSource = images.discover1;
          } else if (route.name === 'Saved') {
            source = images.saved;
            activeSource = images.saved1;
          } else if (route.name === 'Settings') {
            source = images.settings;
            activeSource = images.settings1;
          }

          return (
            <TabIcon
              focused={focused}
              source={source}
              activeSource={activeSource}
            />
          );
        },
      })}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Saved"
        component={Saved}
        options={{
          headerShown: true,
          headerStyle: {backgroundColor: colors.primary},
          headerTitleStyle: {
            color: colors.white,
            fontWeight: 'bold',
            fontSize: vw(18),
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: true,
          headerStyle: {backgroundColor: colors.primary},
          headerTitleStyle: {
            color: colors.white,
            fontWeight: 'bold',
            fontSize: vw(18),
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  line: {
    height: vh(10),
    width: vw(30),
    backgroundColor: colors.primary,
    marginTop: vh(5),
  },
  tabbarView: {
    alignItems: 'center',
  },
});
