import 'react-native-gesture-handler';
import React, {createContext, useReducer} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import {appReducer} from './appContextReducer';

// importing AuthStack Screens
import {LandingPage} from './components/authStack/LandingPage';
import {SignIn} from './components/authStack/SignIn';
import {SignUp} from './components/authStack/SignUp';

// importing Tab Screens
import {HiveHome} from './components/userStack/HiveHome';
import {Post} from './components/userStack/Post';
import {Events} from './components/userStack/Events'
import {SellAndBuy} from './components/userStack/SellAndBuy'

//importing DrawerScreens (and custom functions)
import{CustomDrawerContent}from './components/drawerItems/CustomDrawerContent';
import{Profile}from './components/drawerItems/Porfile';
import{SavedItems}from './components/drawerItems/SavedItems';
import{BeesInMyHive}from './components/drawerItems/BeesInMyHive';
import{DirectMessages}from './components/drawerItems/DirectMessages';

const initialState = {isLoggedIn:false};
//initialising the App context (central storage)
export const AppContext = createContext();

// creating the StackNavigator
const AuthStack= createStackNavigator();
//creating the TabNavigator
const Tab = createBottomTabNavigator();
//creating the DrawerNavigator
const AppDrawer = createDrawerNavigator();

//declaring TabsNavigatorScreens
const TabScreens = ()=>(
  <Tab.Navigator initialRouteName='HeivHome'>
    <Tab.Screen name='HiveHome' component={HiveHome} options={{title:'Home', tabBarIcon:props=> <Ionicons name="home" size={props.size} color={props.color}/> }}/>
    <Tab.Screen name='Post' component={Post} options={{ tabBarIcon:porps=> <Ionicons name="add-circle-outline" size={porps.size} color={porps.color} />}}/>
    <Tab.Screen name='Events' component={Events} options={{ tabBarIcon:porps=> <Ionicons name="calendar" size={porps.size} color={porps.color} />}}/>
    <Tab.Screen name='SellAndBuy' component={SellAndBuy} options={{title:'sell & buy', tabBarIcon:porps=> <Ionicons name="basket" size={porps.size} color={porps.color} />}}/>
  </Tab.Navigator>
  );

const AuthStackScreens= ()=>(
  <AuthStack.Navigator  initialRouteName='LandingPage' headerMode='false'>
    <AuthStack.Screen name= 'LandingPage'component={LandingPage} options={{ title: "Welcome" }}/>
    <AuthStack.Screen name= 'SignUp'component={SignUp} options={{ title: "Sign up" }}/>
    <AuthStack.Screen name= 'SignIn'component={SignIn} options={{ title: "Sign In" }}/>
  </AuthStack.Navigator>
);
const AppDrawerScreens = ()=>(
  <AppDrawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}  drawerType='slide'>
    <AppDrawer.Screen name='Tab' component={TabScreens} />
    <AppDrawer.Screen name='Pofile' component={Profile} />
    <AppDrawer.Screen name='DirectMessages' component={DirectMessages}/>
    <AppDrawer.Screen name='SavedItems' component={SavedItems}/>
  </AppDrawer.Navigator>

)

export default function App() {

  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <NavigationContainer>
      {(state.isLoggedIn)?<AppDrawerScreens /> : <AuthStackScreens />}
      </NavigationContainer>
    </AppContext.Provider>
  );
}