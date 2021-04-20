import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { Header, Input } from "react-native-elements";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { UserImgWrapper } from "../../styles/ContactPersonStyle";

export function SignUp({ navigation }) {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
    postCode: "",
  });
  const [userConfirmePassword, setuserConfirmePassword] = useState("");
  const [userId, setUserId] = useState();

  const handleSubmit = () => {
    axios
      .post(`https://bee-close.herokuapp.com/api/users/signup`, user)
      .then(function (response) {
        if (response.data.success) {
          setUserId(response.data.user._id);
        }
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const joinHive = () => {
    axios
      .post(`https://bee-close.herokuapp.com/api/hives/joinhive/${userId}`)
      .then(function (response) {
        if (response.data.success) {
          navigation.navigate("SignIn", {
            email: user.email,
            password: user.password,
          });
        }
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <ScrollView>
      <SafeAreaView>
        <View>
          <Header
            backgroundColor="#37cab8"
            centerComponent={{
              text: "BEE CLOSE",
              style: { color: "#fff", fontSize: 20 },
            }}
            rightComponent={
              <Image
                source={require("../../assets/logo(1).png")}
                style={{ width: 40, height: 40 }}
              />
            }
          />
          <SafeAreaView style={styles.wrapper}>
            <View style={styles.infoBoxWrapper}>
              <Text style={styles.infoBoxText}>Create your account!</Text>
            </View>
            <View style={styles.inputWrapper}>
              <Ionicons name="person-outline" size={20} color="black" />
              <Input
                placeholder="first name"
                containerStyle={{ width: 140, height: 40 }}
                onChangeText={(text) => setUser({ ...user, firstName: text })}
                defaultValue={user.firstName}
              />
              <Input
                placeholder="last name"
                containerStyle={{ width: 140, height: 40 }}
                onChangeText={(text) => setUser({ ...user, lastName: text })}
                defaultValue={user.lastName}
              />
            </View>
            <View>
              <View style={styles.inputWrapper}>
                <Ionicons name="mail-outline" size={20} />
                <Input
                  placeholder="E-mail"
                  keyboardType="email-address"
                  containerStyle={{ width: 250, height: 40 }}
                  onChangeText={(text) => setUser({ ...user, email: text })}
                  defaultValue={user.email}
                />
              </View>
              <View style={styles.inputWrapper}>
                <Ionicons name="lock-closed-outline" size={20} />
                <Input
                  placeholder="password"
                  minLength="8"
                  containerStyle={{ width: 140, height: 40 }}
                  onChangeText={(text) => setUser({ ...user, password: text })}
                  defaultValue={user.password}
                  secureTextEntry={true}
                />
                <Input
                  placeholder="confirmation"
                  containerStyle={{ width: 140, height: 40 }}
                  onChangeText={(text) => setuserConfirmePassword(text)}
                  defaultValue={userConfirmePassword}
                  secureTextEntry={true}
                />
              </View>
            </View>
            <View style={styles.inputWrapper}>
              <View style={styles.inputWrapper}>
                <Ionicons name="globe-outline" size={20} />
                <Input
                  placeholder="Country"
                  containerStyle={{ width: 120, height: 40 }}
                  onChangeText={(text) => setUser({ ...user, country: text })}
                  defaultValue={user.country}
                />
              </View>
              <View style={styles.inputWrapper}>
                <Ionicons name="location-outline" size={20} />
                <Input
                  placeholder="City"
                  containerStyle={{ width: 120, height: 40 }}
                  onChangeText={(text) => setUser({ ...user, city: text })}
                  defaultValue={user.city}
                />
              </View>
            </View>
            <View style={styles.inputWrapper}>
              <View style={styles.inputWrapper}>
                <FontAwesome name="street-view" size={20} />
                <Input
                  placeholder="street"
                  containerStyle={{ width: 120, height: 40 }}
                  onChangeText={(text) => setUser({ ...user, street: text })}
                  defaultValue={user.street}
                />
              </View>
              <View style={styles.inputWrapper}>
                <FontAwesome name="building-o" size={20} />
                <Input
                  placeholder="house No."
                  containerStyle={{ width: 100, height: 40 }}
                  onChangeText={(text) =>
                    setUser({ ...user, houseNumber: text })
                  }
                  defaultValue={user.houseNumber}
                />
              </View>
            </View>
            <View style={styles.inputWrapper}>
              <View style={styles.inputWrapper}>
                <FontAwesome name="map-pin" size={20} />
                <Input
                  placeholder="post code"
                  containerStyle={{ width: 100, height: 40 }}
                  onChangeText={(text) => setUser({ ...user, postCode: text })}
                  defaultValue={user.postCode}
                />
              </View>
            </View>
          </SafeAreaView>
          <View style={{ padding: 10, alignItems: "center" }}>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>

          {userId ? (
            <View style={{ padding: 10, alignItems: "center" }}>
              <TouchableOpacity style={styles.button} onPress={joinHive}>
                <Text
                  style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
                  Join/Create a Hive
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <Text></Text>
            </View>
          )}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: 10,
    marginHorizontal: 10,
    marginTop: 40,
    borderColor: "#37cab8",
    borderWidth: 2,
    borderRadius: 10,
  },
  infoBoxWrapper: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#37cab8",
  },
  infoBoxText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
  button: {
    width: 250,
    alignItems: "center",
    backgroundColor: "#37cab8",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "baseline",
    padding: 5,
  },
});
