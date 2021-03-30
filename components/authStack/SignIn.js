import React, {useState, useContext} from 'react';
import {AppContext} from '../../App'
import {login} from '../../appContextActions'
import { View, Text, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { ScreenContainer } from 'react-native-screens';
import { Header } from '../authStack/Header';
import axios from 'axios';
import { API_URL } from '@env';

export function SignIn({navigation}) {
    const [userEmail, setuserEmail] = useState('')
    const [password, setpassword] = useState('')
    const {dispatch} = useContext(AppContext)

const handleSubmit= ()=>{
    axios.post(`http://localhost:4000/api/users/login`, {
        email: userEmail,
        password:password
    })
    .then(function (response) {
        dispatch(login())
        // dispatch(logout())
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });
}
    return (
        <ScreenContainer>
            <Header/>
            <View style={styles.container}>
                <TextInput  style={styles.input} onChangeText={(text)=> setuserEmail(text)}  defaultValue={userEmail} placeholder='your email'/>
                <TextInput  style={styles.input} onChangeText={(text)=> setpassword(text)}  defaultValue={password} placeholder='password' secureTextEntry={true}/>
                    <Text>I am Sign In Page</Text>
                <TouchableOpacity activeOpacity={0.95} style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttontext}>Sign in</Text>
                </TouchableOpacity>
            </View>
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    input:{
        height:50,
        width:200,
        padding:10,
        margin:10,
        borderColor:'#37cab8',
        backgroundColor:'white',
        borderWidth:2,
        borderRadius:10
    },
    button: {
        flexDirection: 'row', 
        height: 50, 
        backgroundColor: '#37cab8',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        width:200,
        borderRadius:10,
        marginBottom:100
    },
    buttontext:{
        fontSize:24,
        color:'#ffffff'
    }
})
