import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';


export const UserProfileScreen = ({ props, route }) => {
    const { username, email, userImg } = route.params;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
            <View style={styles.container} >
                <Image style={styles.userImg}
                    source={userImg}
                />
          <Text style={styles.userName}> {JSON.stringify(username)} </Text>
          <Text style={styles.userName}> {JSON.stringify(email)} </Text>
                <Text style={styles.aboutUser}>
                    This is {username} who lives in your Hive.
                </Text>

                <View style={styles.userBtnWrapper}>
                    <TouchableOpacity style={styles.userBtn} onPress={() => { }}>
                        <Text style={styles.userBtnTxt}>Message</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        padding: 20,
    },
    userImg: {
        height: 150,
        width: 150,
        borderRadius: 75,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    aboutUser: {
        fontSize: 12,
        fontWeight: '600',
        color: '#777777',
        textAlign: 'center',
        marginBottom: 10,
    },
    userBtnWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 10,
    },
    userBtn: {
        width: 250,
        backgroundColor: '#37cab8',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    userBtnTxt: {
        color: '#ffffff',
    }
})