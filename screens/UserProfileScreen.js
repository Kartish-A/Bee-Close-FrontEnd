import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Header } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

export const UserProfileScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1, backgroundColor: '#ffffff'}}>
            <ScrollView style={styles.container}
                contentContainerStyle={{justifyContent:'center', alignItems:'center'}}
                showsVerticalScrollIndicator={false}
            >
                
                <Image style={styles.userImg}
                    source={{uri:'https://picsum.photos/id/1027/200/300'}}
                />
                <Text style={styles.userName}> Nicole Abraham </Text>
                <Text style={styles.aboutUser}> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui
                </Text>

                <View style={styles.userBtnWrapper}>
                    <TouchableOpacity style={styles.userBtn} onPress={()=>{}}>
                        <Text style={styles.userBtnTxt}>Message</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
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