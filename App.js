import 'react-native-gesture-handler';
import React, {createContext, useReducer} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { appReducer } from './appContextReducer';

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
import { CustomDrawerContent }from './components/drawerItems/CustomDrawerContent';
// import { ProfileScreen }from './components/drawerItems/ProfileStack/ProfileScreen';
import { SavedItems }from './components/drawerItems/SavedItems';
import { BeesInMyHive }from './components/drawerItems/BeesInMyHive';
import { DirectMessages }from './components/drawerItems/DirectMessages';
import { colors } from 'react-native-elements';

//importing ProfileStackScreens
import { ProfileScreen } from './components/drawerItems/ProfileStack/ProfileScreen';
import { EditProfileScreen } from './components/drawerItems/ProfileStack/EditProfileScreen';

const initialState = {isLoggedIn:false};
//initialising the App context (central storage)
export const AppContext = createContext();

// creating the StackNavigator
const AuthStack= createStackNavigator();
//creating the TabNavigator
const Tab = createBottomTabNavigator();
//creating the DrawerNavigator
const AppDrawer = createDrawerNavigator();
//creating ProfileStack
const ProfileStack = createStackNavigator();

//declaring ProfileStackScreens
const ProfileStackScreens = () =>(
  <ProfileStack.Navigator>
    <ProfileStack.Screen name='ProfileScreen' component={ProfileScreen} options={{headerShown:false}}/>
    <ProfileStack.Screen name='EditProfileScreen' component={EditProfileScreen} options={{title:'Edit profile', headerStyle:{backgroundColor:'#37cab8'}}}/>
  </ProfileStack.Navigator>
)

//declaring TabsNavigatorScreens
const TabScreens = ()=>(
  <Tab.Navigator initialRouteName='HeivHome' tabBarOptions={{activeTintColor:'#37cab8'}}>
    <Tab.Screen name='HiveHome' component={HiveHome} options={{title:'Home', tabBarIcon:({focused,color,size})=> <Ionicons name="home" size={size} color={color} focused={focused}/>}}/>
    <Tab.Screen name='Post' component={Post} options={{ tabBarIcon:({focused,color,size})=> <Ionicons name="add-circle-outline" size={size} color={color} focused={focused} />}}/>
    <Tab.Screen name='Events' component={Events} options={{ tabBarIcon:({focused,color,size})=> <Ionicons name="calendar" size={size} color={color} focused={focused}/>}}/>
    <Tab.Screen name='SellAndBuy' component={SellAndBuy} options={{title:'sell & buy', tabBarIcon:({focused,color,size})=> <Ionicons name="basket" size={size} color={color} focused={focused}/>}}/>
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
  <AppDrawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}  drawerType='slide' >
    <AppDrawer.Screen name='Tab' component={TabScreens} />
    <AppDrawer.Screen name='Pofile' component={ProfileStackScreens} />
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