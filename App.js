import 'react-native-gesture-handler';
import React, {createContext, useReducer} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { appReducer } from './appContextReducer';

// importing AuthStack Screens
import {LandingPage} from './screens/authStack/LandingPage';
import {SignIn} from './screens/authStack/SignIn';
import {SignUp} from './screens/authStack/SignUp';

// importing Tab Screens
import {HiveHome} from './screens/bottomTabScreens/HiveHome';
import {CreatePost} from './screens/bottomTabScreens/CreatePost';
import {Events} from './screens/bottomTabScreens/Events'
import {SellAndBuy} from './screens/bottomTabScreens/SellAndBuy'

//importing DrawerScreens (and custom functions)
import { CustomDrawerContent }from './screens/drawerItems/CustomDrawerContent';
// import { ProfileScreen }from './components/drawerItems/ProfileStack/ProfileScreen';
import { SavedItems }from './screens/drawerItems/SavedItems';
import { BeesInMyHive }from './screens/drawerItems/BeesInMyHive';
import { DirectMessages }from './screens/drawerItems/DirectMessages';


//importing ProfileStackScreens
import { ProfileScreen } from './screens/drawerItems/ProfileStack/ProfileScreen';
import { EditProfileScreen } from './screens/drawerItems/ProfileStack/EditProfileScreen';

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
    <Tab.Screen name='CreatePost' component={CreatePost} options={{ tabBarIcon:({focused,color,size})=> <Ionicons name="add-circle-outline" size={size} color={color} focused={focused} />}}/>
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
      {/* {(state.isLoggedIn)?<AppDrawerScreens /> : <AuthStackScreens />} */}
      <AppDrawerScreens/>
      </NavigationContainer>
    </AppContext.Provider>
  );
}