import React, { createContext, useReducer } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { appReducer } from "./appContextReducer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

// importing AuthStack Screens
import { LandingPage } from "./screens/authStack/LandingPage";
import { SignIn } from "./screens/authStack/SignIn";
import { SignUp } from "./screens/authStack/SignUp";

// importing BottomTab Screens
import { HiveHome } from "./screens/bottomTabScreens/HiveHome";
import { CreatePost } from "./screens/bottomTabScreens/CreatePost";
import { Events } from "./screens/bottomTabScreens/Events";
import { BeeThere } from "./screens/bottomTabScreens/BeeThere";

//importing DrawerScreens (and custom functions)
import { CustomDrawerContent } from "./screens/drawerItems/CustomDrawerContent";

// import { ProfileScreen }from './components/drawerItems/ProfileStack/ProfileScreen';
import { BeesInMyHive } from "./screens/drawerItems/BeesInMyHive";

// import TopTab Screens
import { SavedPosts } from './screens/SavedPosts';
import { SavedEvents } from './screens/SavedEvents';
import { SavedBeeThere } from './screens/SavedBeeThere';

//importing ProfileStackScreens
import { PersonalProfileScreen } from "./screens/drawerItems/PersonalProfileStack/PersonalProfileScreen";
import { EditPersonalProfileScreen } from "./screens/drawerItems/PersonalProfileStack/EditPersonalProfileScreen";

import { UserProfileScreen } from "./screens/UserProfileScreen";

import { ChatScreen } from './screens/ChatScreen'

// const [isLoggedIn, setisLoggedIn] = useState(false)
const initialState = {
  isLoggedIn: false,
  token: AsyncStorage.getItem("token"),
  username: '',
  userId: ''
};

//initialising the App context (central storage)
export const AppContext = createContext();

// creating the StackNavigator
const AuthStack = createStackNavigator();
//creating the TabNavigator
const Tab = createBottomTabNavigator();
//creating the DrawerNavigator
const AppDrawer = createDrawerNavigator();
// creating the TopTabNavigator
const TopTab = createMaterialTopTabNavigator();
//creating ProfileStack
const PersonalProfileStack = createStackNavigator();
//creating a stackNavigator consist of: HiveHome Screen + UserProfile Screen
const HiveHomeStack = createStackNavigator();

//declaring AuthStackScreens
const AuthStackScreens = () => (
  <AuthStack.Navigator initialRouteName="LandingPage" headerMode="false">
    <AuthStack.Screen
      name="LandingPage"
      component={LandingPage}
      options={{ title: "Welcome" }}
    />
    <AuthStack.Screen
      name="SignUp"
      component={SignUp}
      options={{ title: "Sign up" }}
    />
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
      options={{ title: "Sign In" }}
    />
  </AuthStack.Navigator>
);

//declaring TabsNavigatorScreens
const TabScreens = () => (
  <Tab.Navigator
    initialRouteName="HiveHome"
    tabBarOptions={{ activeTintColor: "#37cab8", tabStyle: { borderTopColor: '#37cab8', borderTopWidth: 1 } }}>
    <Tab.Screen
      name="HiveHomeStack"
      component={HiveHomeStackScreens}
      options={{
        title: "Home",
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons name="home" size={size} color={color} focused={focused} />
        ),
      }}
    />
    <Tab.Screen
      name="CreatePost"
      component={CreatePost}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons
            name="add-circle-outline"
            size={size}
            color={color}
            focused={focused}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Events"
      component={Events}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons
            name="calendar"
            size={size}
            color={color}
            focused={focused}
          />
        ),
      }}
    />
    <Tab.Screen
      name="BeeThere"
      component={BeeThere}
      options={{
        title: "bee there!",
        tabBarIcon: ({ focused, color, size }) => (
          <MaterialCommunityIcons name="bee-flower" size={size} color={color} focused={focused} />
        ),
      }}
    />
  </Tab.Navigator>
);

//declaring AppDrawerScreens
const AppDrawerScreens = () => (
  <AppDrawer.Navigator
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    drawerType="slide">
    <AppDrawer.Screen name="Tab" component={TabScreens} />
    <AppDrawer.Screen name="PersonalPofileScreen" component={PersonalProfileStackScreens} />
    <AppDrawer.Screen name="BeesInMyHive" component={BeesInMyHive} />
    <AppDrawer.Screen name="SavedItems" component={TopTabScreens} />
  </AppDrawer.Navigator>
);

//declaring TopTabNavigatorScreens
const TopTabScreens = () => (
  <TopTab.Navigator
    tabBarOptions={{
      activeTintColor: '#fff', labelStyle: { fontSize: 14 },
      indicatorStyle: { borderWidth: 3, borderColor: '#ffffff' }, style: { backgroundColor: '#37cab8', marginTop: 15, height: 60 }
    }}
  >
    <TopTab.Screen name='SavedPosts' component={SavedPosts} options={{ title: 'saved posts' }} />
    <TopTab.Screen name='SavedEvents' component={SavedEvents} options={{ title: 'saved events' }} />
    <TopTab.Screen name='SavedBeeThere' component={SavedBeeThere} options={{ title: 'bee there ' }} />
  </TopTab.Navigator>
)

//declaring HiveHomeStackScreens
const HiveHomeStackScreens = () => (
  <HiveHomeStack.Navigator initialRouteName="HiveHome">
    <HiveHomeStack.Screen
      name="HiveHome"
      component={HiveHome}
      options={{ headerShown: false }}
    />
    <HiveHomeStack.Screen
      name="UserProfile"
      component={UserProfileScreen}
      options={{
        title: "Bee profile",
        headerStyle: { backgroundColor: "#37cab8" },
        headerTintColor: "#ffffff",
      }}
    />
    <HiveHomeStack.Screen
      name="ChatScreen"
      component={ChatScreen}
      options={({ route }) => ({
        title: route.params.username,
        headerStyle: { backgroundColor: '#37cab8' }
      })}

    />
  </HiveHomeStack.Navigator>
);

//declaring ProfileStackScreens
const PersonalProfileStackScreens = () => (
  <PersonalProfileStack.Navigator>
    <PersonalProfileStack.Screen
      name="PersonalProfileScreen"
      component={PersonalProfileScreen}
      options={{ headerShown: false }}
    />
    <PersonalProfileStack.Screen
      name="EditPersonalProfileScreen"
      component={EditPersonalProfileScreen}
      options={{
        title: "Edit profile",
        headerStyle: { backgroundColor: "#37cab8" },
        headerTintColor: "#ffffff",
      }}
    />
  </PersonalProfileStack.Navigator>
);


export default function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <NavigationContainer>
        {state.isLoggedIn ? <AppDrawerScreens /> : <AuthStackScreens />}
      </NavigationContainer>
    </AppContext.Provider>
  );
}
