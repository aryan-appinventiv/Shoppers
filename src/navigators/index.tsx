// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Splash from '../screens/splash';
// import Tutorial from '../screens/tutorial';
// import BottomTabNavigator from './bottomtab';
// import LoginMenu from '../screens/loginMenu';
// import RegisterWithEmail from '../screens/registerWithEmail';
// import Signin from '../screens/signin';
// import Phone from '../screens/phone';
// import ForgotPassword from '../screens/forgotPassword';
// import Detail from '../screens/detail';
// import Search from '../screens/search';
// import TermsOfUse from '../screens/termsOfUse';
// import PrivacyPolicy from '../screens/privacyPolicy';
// import Feedback from '../screens/feedback';
// import Profile from '../screens/profile';
// import SearchPage from '../screens/searchPage';

// const RootNavigator = () => {
//   const Stack = createNativeStackNavigator();

//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           animation: 'slide_from_right',
//         }}>
//         <Stack.Screen
//           component={Splash}
//           name="Splash"
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           component={Search}
//           name="Search"
//           options={{headerShown: false}}
//         />
//          <Stack.Screen
//           component={TermsOfUse}
//           name="TermsOfUse"
//           options={{headerShown: false}}
//         />
//          <Stack.Screen
//           component={SearchPage}
//           name="SearchPage"
//           options={{headerShown: false}}
//         />
//           <Stack.Screen
//           component={PrivacyPolicy}
//           name="PrivacyPolicy"
//           options={{headerShown: false}}
//         />
//           <Stack.Screen
//           component={Feedback}
//           name="Feedback"
//           options={{headerShown: false}}
//         />
//          <Stack.Screen
//           component={Profile}
//           name="Profile"
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           component={Detail}
//           name="Detail"
//           options={{headerShown: false}}
//         />
//          <Stack.Screen
//           component={ForgotPassword}
//           name="ForgotPassword"
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           component={Phone}
//           name="Phone"
//           options={{headerShown: false}}
//         />
//          <Stack.Screen
//           component={Signin}
//           name="Signin"
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           component={Tutorial}
//           name="Tutorial"
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           component={LoginMenu}
//           name="LoginMenu"
//           options={{headerShown: false}}
//         />
//          <Stack.Screen
//           component={RegisterWithEmail}
//           name="RegisterWithEmail"
//           options={{headerShown: false}}
//         />
        

        

//         <Stack.Screen
//           component={BottomTabNavigator}
//           name="BottomTabNavigator"
//           options={{headerShown: false}}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default RootNavigator;




import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../screens/splash';
import Tutorial from '../screens/tutorial';
import BottomTabNavigator from './bottomtab';
import LoginMenu from '../screens/loginMenu';
import RegisterWithEmail from '../screens/registerWithEmail';
import Signin from '../screens/signin';
import Phone from '../screens/phone';
import ForgotPassword from '../screens/forgotPassword';
import Detail from '../screens/detail';
import Search from '../screens/search';
import TermsOfUse from '../screens/termsOfUse';
import PrivacyPolicy from '../screens/privacyPolicy';
import Feedback from '../screens/feedback';
import Profile from '../screens/profile';
import SearchPage from '../screens/searchPage';

export type RootStackParamList = {
  Splash: undefined;
  Search: undefined;
  TermsOfUse: undefined;
  SearchPage: undefined;
  PrivacyPolicy: undefined;
  Feedback: undefined;
  Profile: undefined;
  Detail: undefined;
  ForgotPassword: undefined;
  Phone: undefined;
  Signin: undefined;
  Tutorial: undefined;
  LoginMenu: undefined;
  RegisterWithEmail: undefined;
  BottomTabNavigator: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const routes = [
  { name: 'Splash', component: Splash },
  { name: 'Search', component: Search },
  { name: 'TermsOfUse', component: TermsOfUse },
  { name: 'SearchPage', component: SearchPage },
  { name: 'PrivacyPolicy', component: PrivacyPolicy },
  { name: 'Feedback', component: Feedback },
  { name: 'Profile', component: Profile },
  { name: 'Detail', component: Detail },
  { name: 'ForgotPassword', component: ForgotPassword },
  { name: 'Phone', component: Phone },
  { name: 'Signin', component: Signin },
  { name: 'Tutorial', component: Tutorial },
  { name: 'LoginMenu', component: LoginMenu },
  { name: 'RegisterWithEmail', component: RegisterWithEmail },
  { name: 'BottomTabNavigator', component: BottomTabNavigator },
];

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
        }}
      >
        {routes.map(({ name, component }) => (
          <Stack.Screen
            key={name}
            name={name as keyof RootStackParamList}
            component={component}
            options={{ headerShown: false }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;