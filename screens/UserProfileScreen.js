<<<<<<< HEAD
import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Header } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { AppContext } from "../App";
import { useIsFocused } from "@react-navigation/native";
=======
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

>>>>>>> main

<<<<<<< HEAD
export const UserProfileScreen = ({ navigation }) => {
  const { state } = useContext(AppContext);
=======
export const UserProfileScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1, backgroundColor: '#f8f8f8'}}>
            <View style={styles.container} >    
                <Image style={styles.userImg}
                    source={{uri:'https://picsum.photos/id/1027/200/300'}}
                />
                <Text style={styles.userName}> Nicole Abraham </Text>
                <Text style={styles.aboutUser}> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui
                </Text>
>>>>>>> main

  useEffect(() => {
    axios
      .get(`https://bee-close.herokuapp.com/api/users`, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
      .then((res) => {
        if (res.data.success) {
          setPosts(res.data.allPosts);
        }
      });
  }, [isFocused]);

<<<<<<< HEAD
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        showsVerticalScrollIndicator={false}>
        <Image
          style={styles.userImg}
          source={{ uri: "https://picsum.photos/id/1027/200/300" }}
        />
        <Text style={styles.userName}> {state.firstName} </Text>
        <Text style={styles.aboutUser}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui
        </Text>

        <View style={styles.userBtnWrapper}>
          <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
            <Text style={styles.userBtnTxt}>Message</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  userImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  aboutUser: {
    fontSize: 12,
    fontWeight: "600",
    color: "#777777",
    textAlign: "center",
    marginBottom: 10,
  },
  userBtnWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginBottom: 10,
  },
  userBtn: {
    width: 250,
    backgroundColor: "#37cab8",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    marginHorizontal: 5,
  },
  userBtnTxt: {
    color: "#ffffff",
  },
});
=======
            </View>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        backgroundColor: '#f8f8f8',
        padding: 20,
    },
    userImg:{
        height: 150,
        width: 150,
        borderRadius: 75,
    },
    userName:{
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    aboutUser:{
        fontSize: 12,
        fontWeight: '600',
        color: '#777777',
        textAlign: 'center',
        marginBottom: 10,
    },
    userBtnWrapper:{
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 10,
    },
    userBtn:{
        width:250,
        backgroundColor: '#37cab8',
        borderRadius: 10,
        padding:10,
        alignItems:'center',
        marginHorizontal: 5,
    },
    userBtnTxt:{
        color: '#ffffff',
    }
})
>>>>>>> main
