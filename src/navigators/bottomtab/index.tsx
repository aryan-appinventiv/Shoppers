// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import Home from '../../screens/home';
// import Discover from '../../screens/discover';
// import Saved from '../../screens/saved';
// import Settings from '../../screens/settings';
// import { images } from '../../assets';
// import { Image } from 'react-native';



// const Tab = createBottomTabNavigator();
// const BottomTabNavigator = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         component={Home}
//         name="Home"
        
//         options={{headerShown: false, tabBarLabel:"Home"}}
//       />
//       <Tab.Screen
//         component={Discover}
//         name="Discover"
//         options={{headerShown: false}}
//       />
    
//       <Tab.Screen
//         component={Saved}
//         name="Saved"
//         options={{headerShown: false}}
//       />

//       <Tab.Screen
//         component={Settings}
//         name="Settings"
//         options={{headerShown: false}}
//       />
//     </Tab.Navigator>
//   );
// };
// export default BottomTabNavigator;

import React from 'react';
import { Image, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/home';
import Discover from '../../screens/discover';
import Saved from '../../screens/saved';
import Settings from '../../screens/settings';
import { images } from '../../assets';
import { colors } from '../../utils/colors';

const Tab = createBottomTabNavigator();

const TabIcon = ({ focused, source, activeSource }) => (
  <>
  <Image
    source={focused ? activeSource : source}
    style={{ width: focused?30:25, height: focused?30:25, tintColor: focused ? colors.primary : '#808080' }}
    resizeMode="contain"
  />
  {focused? ( <View style={{height:10, width:40, backgroundColor:colors.primary, marginTop:5}}></View>): null}
  </>
);

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: 'white', height:60, paddingTop:5 },
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
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen name="Saved" component={Saved} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
