import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/home';
import Discover from '../../screens/discover';
import Saved from '../../screens/saved';
import Settings from '../../screens/settings';
import { images } from '../../assets';
import { colors } from '../../utils/colors';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

const Tab = createBottomTabNavigator();
const duration = 2000;
const easing = Easing.bezier(0.25, -0.5, 0.25, 1);

const TabIcon = ({ focused, source, activeSource }) => {
  // Set up the rotation animation for the focused state
  const rotation = useSharedValue(0);

  useEffect(() => {
    if (focused) {
      rotation.value = withRepeat(withTiming(1, { duration, easing }), -1);
    } else {
      rotation.value = 0; // Reset when not focused
    }
  }, [focused]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value * 360}deg` }],
  }));

  return (
    <View>
      <Image
        source={focused ? activeSource : source}
        style={{ width: focused ? 30 : 25, height: focused ? 30 : 25, tintColor: focused ? colors.primary : '#808080' }}
        resizeMode="contain"
      />
      {focused ? (
        <View style={{ height: 10, width: 30, backgroundColor: colors.primary, marginTop: 5 }} />
      ) : null}
    </View>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: 'white', height: 70, paddingTop: 10 },
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          let source;
          let activeSource;

          // Assign the source for each tab based on the active/inactive state
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

          return <TabIcon focused={focused} source={source} activeSource={activeSource} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Discover" component={Discover} options={{ headerShown: false }} />
      <Tab.Screen name="Saved" component={Saved} options={{ headerShown: false }} />
      <Tab.Screen name="Settings" component={Settings} options={{ headerShown: true }} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
