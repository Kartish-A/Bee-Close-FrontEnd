import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {createContext, useReducer} from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {appReducer} from './appContextReducer';

// importing AuthStack Screens
import {LandingPage} from './components/authStack/LandingPage';
import {SignIn} from './components/authStack/SignIn';
import {SignUp} from './components/authStack/SignUp';

// importing Tab Screens
import {HeivHome} from './components/userStack/HiveHome';
import {Profile} from './components/userStack/Porfile';
import {Post} from './components/userStack/Post';

// enableScreens();

const initialState = {isLoggedIn:false};
export const AppContext = createContext();

// creating the StackNavigator
const AuthStack= createStackNavigator();
//creating the TabNavigator
const Tab = createBottomTabNavigator();

//declaring TabsNavigatorScreens
const TabScreens = ()=>(<Tab.Navigator initialRouteName='HeivHome'>
      <Tab.Screen name='HeivHome'component={HeivHome}/>
      <Tab.Screen name='Profile'component={Profile}/>
      <Tab.Screen name='Post'component={Post}/>
  </Tab.Navigator>)

const AuthStackScreens= ()=>(
  <AuthStack.Navigator initialRouteName='LandingPage'>
    <AuthStack.Screen name= 'LandingPage'component={LandingPage} options={{ title: "Welcome" }}/>
    <AuthStack.Screen name= 'SignUp'component={SignUp} options={{ title: "Sign up" }}/>
    <AuthStack.Screen name= 'SignIn'component={SignIn} options={{ title: "Sign In" }}/>
  </AuthStack.Navigator>
)

export default function App() {

  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <NavigationContainer>
      {(state.isLoggedIn)?<TabScreens /> : <AuthStackScreens />}
      </NavigationContainer>
    </AppContext.Provider>
  );
}