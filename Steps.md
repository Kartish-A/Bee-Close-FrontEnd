* you have two approaches: React-native cli or Expo cli (tool)

1- setting up the Development Environment:

    - Node.js

    - Expo CLI
        setting up Expo cli:
        - Install Expo => npm install --global expo-cli / npm install -g expo-cli
        - Create new project => expo init my-project

        to start the Development server (Expo-server):
        - npm start / expo start
        - after finishing step No.2 below, from the Expo localhost server in your Browser chose: run on Android device/emulator. 


2- runnig the App on a simulator or virtual device:
    -Android-Studio
    - Download the Android-studio
    - run it => navigate to "bin" directory and: ./studio.sh
    - make sure that the SDK option is checked in the android studio option-pannel
    - chose your AVD (vertual device)

3- in React-native there are no css files, there is styling feature baesed on css syntax but writen with js/jsx
    two options: 
    either direct elements styling or use styleSheets (as integrated component)

4- Expo-cli Libraries:

5- React native Elements:
    Not supported with Expo cli.

6- Navigation in React-native:
    there are various components for navigator in React-native.
    and two main navigators: 1) React navigation 2) react-native navigation

   (*) npm install @react-navigation/native
   (*) expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context    @react-native-community/  masked-view

    follow steps here: https://reactnavigation.org/docs/getting-started 


    in the App.js:
    import { NavigationContainer } from '@react-navigation/native';
    import { createStackNavigator } from '@react-navigation/stack';

    in homeStack.js:
    import { createStackNavigator } from '@react-navigation/stack';
    import {createAppContainer} from 'react-navigation;
