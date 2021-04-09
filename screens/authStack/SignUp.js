import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Header,Input } from 'react-native-elements';
import axios from 'axios';

export function SignUp({navigation}) {
const [userFirstName, setuserFirstName] = useState('')
const [userLastName, setuserLastName] = useState('')
const [userEmail, setuserEmail] = useState('');
const [userPassword, setuserPassword] = useState('');
const [userConfirmePassword, setuserConfirmePassword] = useState('');
const [userCountry, setuserCountry] = useState('');
const [userCity, setuserCity] = useState('');
const [userStreet, setuserStreet] = useState('');
const [userHouseNo, setuserHousNo] = useState('');
const [userPostCode, setuserPostcode] = useState('');


const handleSubmit= ()=>{

    axios.post(`https://bee-close.herokuapp.com/api/users/signup`, {
        
    firstName: userFirstName,
    lastName: userLastName,
    email: userEmail,
    password: userPassword,
    country: userCountry,
    city: userCity,
    street: userStreet,
    streetNumber: userHouseNo,
    postCode: userPostCode

    })
    .then(function (response) {
        navigation.navigate('SignIn',{email: userEmail,
        password: userPassword,})
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

return (
    <ScrollView>
        <SafeAreaView>
            <View>
                <Header 
                    backgroundColor='#37cab8'
                    centerComponent={{ text: 'BEE CLOSE', style: { color: '#fff', fontSize:20 } }}
                    rightComponent={<Image source={require('../../assets/AppLogo.png')} style={{width:40, height:40}}/> }
                />
                <SafeAreaView style={styles.wrapper} >
                    <View style={styles.infoBoxWrapper}>
                        <Text style={{color:'#37cab8', fontSize:20,fontWeight:'bold', alignSelf:'center',marginTop:10}}>Create your account!</Text>
                    </View>
                    <View style={{flexDirection:'row', marginTop:20}}>
                        <Input placeholder='first name' containerStyle={{width:170,height:50}}
                        onChangeText={(text)=>setuserFirstName(text)}
                        defaultValue={userFirstName}/>
                        <Input placeholder='last name'  containerStyle={{width:170,height:50}}
                        onChangeText={(text)=> setuserLastName(text)}
                        defaultValue={userLastName}/>
                    </View>
                    <View>
                        <Input placeholder='E-mail' keyboardType='email-address' containerStyle={{width:200,height:60}}
                        onChangeText={(text)=> setuserEmail(text)}
                        defaultValue={userEmail}/>
                        <Input placeholder='create password'  minLength='8' containerStyle={{width:200,height:50}}
                        onChangeText={(text)=> setuserPassword(text)}  
                        defaultValue={userPassword}
                        secureTextEntry={true}/>
                        <Input placeholder='confirme password' containerStyle={{width:200,height:50}}
                        onChangeText={(text)=> setuserConfirmePassword(text)}  
                        defaultValue={userConfirmePassword}
                        secureTextEntry={true}/>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Input placeholder='Country' keyboardType='' containerStyle={{width:170,height:50}}
                        onChangeText={(text)=> setuserCountry(text)  }
                        defaultValue={userCountry}/>
                        <Input placeholder='City' containerStyle={{width:170,height:50}}
                        onChangeText={(text)=> setuserCity(text)}
                        defaultValue={userCity}/>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Input placeholder='street' containerStyle={{width:170,height:50}}
                        onChangeText={(text)=> setuserStreet(text)}
                        defaultValue={userStreet}/>
                        <Input placeholder='house No.' containerStyle={{width:170,height:50}}
                        onChangeText={(text)=> setuserHousNo(text)}
                        defaultValue={userHouseNo}/>
                    </View>
                    <View>
                        <Input placeholder='post code' containerStyle={{width:170,height:50}}
                        onChangeText={(text)=> setuserPostcode(text)}
                        defaultValue={userPostCode}/>
                    </View>
                </SafeAreaView> 
                    <View style={{padding:10,marginTop:30,alignItems:'center'}}>
                        <TouchableOpacity style={styles.button} onPress={handleSubmit}>

                            <Text style={{color:'#fff', fontSize:18,fontWeight:'bold'}}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{padding:10,marginTop:10,alignItems:'center'}}>
                        <Text>already have an account?</Text>
                        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('SignIn')}>
                            <Text style={{color:'#fff', fontSize:18,fontWeight:'bold'}}>Sign in</Text>
                        </TouchableOpacity>
                    </View> 
            </View>
        </SafeAreaView>
    </ScrollView>
)
};

const styles = StyleSheet.create({
    wrapper:{
        padding:7,
        paddingBottom:20,
        margin:8,
        borderColor:'#37cab8',
        borderWidth:2,
        borderRadius:10
    },
        infoBoxWrapper: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        flexDirection: 'row',
        height: 60,
        justifyContent:'center'
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