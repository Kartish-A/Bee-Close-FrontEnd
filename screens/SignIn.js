import React, { useState, useContext } from 'react';
import { AppContext } from '../App'
import { setToken, setUsername, login, setUserId } from '../appContextActions'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Header, Input } from 'react-native-elements';
import axios from 'axios';

export function SignIn(route) {
    const [userEmail, setuserEmail] = useState(route.params?.email ?? "");
    const [password, setpassword] = useState(route.params?.password ?? "");

    const { dispatch } = useContext(AppContext);

    const handleSubmit = () => {
        axios
            .post(`https://bee-close.herokuapp.com/api/users/login`, {
                email: userEmail,
                password: password,
            })
            .then(function (response) {
                if (response.status === 200) {
                    let token = response.data.token;
                    dispatch(setToken(token));
                    dispatch(login());
                    dispatch(
                        setUsername(
                            response.data.user.firstName + " " + response.data.user.lastName
                        )

                    );
                    dispatch(
                        setUserId(response.data.user._id)
                    );
                    console.log(token);
                    console.log(response.data.user._id);
                }
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <SafeAreaView>
            <ScrollView>
                <Header
                    backgroundColor="#37cab8"
                    centerComponent={{
                        text: "BEE CLOSE",
                        style: { color: "#fff", fontSize: 20 },
                    }}
                    rightComponent={
                        <Image
                            source={require("../assets/logo(1).png")}
                            style={{ width: 40, height: 40 }}
                        />
                    }
                />
                <Image
                    source={require("../assets/logo(1).png")}
                    style={{ marginTop: 10 }}
                />
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Text
                        style={{ fontSize: 46, color: "#37cab8", fontWeight: "bold" }}>
                        Hello!
                </Text>
                </View>
                <View style={styles.container}>
                    <View style={{ marginTop: 60 }}>
                        <Input
                            placeholder="E-mail"
                            containerStyle={{ width: 200, height: 60 }}
                            onChangeText={(text) => setuserEmail(text)}
                            defaultValue={userEmail}
                            keyboardType="email-address"
                        />
                        <Input
                            placeholder="password"
                            containerStyle={{ width: 200, height: 50 }}
                            onChangeText={(text) => setpassword(text)}
                            defaultValue={password}
                            secureTextEntry={true}
                        />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
                            Sign in
                    </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
    },
    button: {
        width: 250,
        marginTop: 30,
        alignItems: "center",
        backgroundColor: "#37cab8",
        borderRadius: 10,
        padding: 10,
    },
});
