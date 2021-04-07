import React, {useState, useContext} from 'react';
import { AppContext} from '../../App'
import { login } from '../../appContextActions'
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Header,Input} from 'react-native-elements';
import axios from 'axios';

export function SignIn() {
    console.log(process.env);
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
        <View>
            <Header 
                    backgroundColor='#37cab8'
                    centerComponent={{ text: 'BEE CLOSE', style: { color: '#fff', fontSize:20 } }}
                    rightComponent={<Image source={require('../../assets/AppLogo.png')} style={{width:40, height:40}}/> }
                />
            <View style={styles.container}>

                <View style={{marginTop:100}}>
                    <Input 
                        placeholder='E-mail' containerStyle={{width:200,height:60}}
                        onChangeText={(text)=> setuserEmail(text)}
                        defaultValue={userEmail}
                    />
                    <Input 
                        placeholder='password' containerStyle={{width:200,height:50}}
                        onChangeText={(text)=> setpassword(text)}  
                        defaultValue={password}
                        secureTextEntry={true}
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={{color:'#fff', fontSize:18,fontWeight:'bold'}}>Sign in</Text>
                </TouchableOpacity>
            </View>
        </View>
    )   
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:200,
        alignSelf:'center',
        alignItems:'center', 
        justifyContent:'center',
        margin:10,
    },
    button: {
        width:250,
        marginTop:10,
        alignItems: "center",
        backgroundColor: "#37cab8",
        borderRadius:10,
        padding: 10
    }
})
