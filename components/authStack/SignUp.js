import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { ScreenContainer } from 'react-native-screens';
import { Header } from '../authStack/Header';


export function SignUp({navigation}) {
    return (
        <ScreenContainer>
            <Header/>
            <View style={styles.container}>
                <TextInput  style={styles.input} /* onChangeText={onChangeText}  value={text}*/ placeholder='first name'/>
                <TextInput  style={styles.input} /* onChangeText={onChangeText}  value={text}*/ placeholder='last name'/>
                <TextInput  style={styles.input} /* onChangeText={onChangeText}  value={text}*/ placeholder='email'/>
                <TextInput  style={styles.input} /* onChangeText={onChangeText}  value={text}*/ placeholder='password'/>
                <TextInput  style={styles.input} /* onChangeText={onChangeText}  value={text}*/ placeholder='Country'/>
                <TextInput  style={styles.input} /* onChangeText={onChangeText}  value={text}*/ placeholder='City'/>
                <TextInput  style={styles.input} /* onChangeText={onChangeText}  value={text}*/ placeholder='Street Name'/>
                <TextInput  style={styles.input} /* onChangeText={onChangeText}  value={text}*/ placeholder='Post code'/>

                    <Text>I am Sign up Page</Text>
                <TouchableOpacity activeOpacity={0.95} style={styles.button} onPress={()=> navigation.navigate('')}>
                    <Text style={styles.buttontext}>Sign up</Text>
                </TouchableOpacity>

                <Text>already have account?</Text>
                <TouchableOpacity activeOpacity={0.95} style={styles.button} onPress={()=> navigation.navigate('SignIn')}>
                    <Text style={styles.buttontext}>Sign in</Text>
                </TouchableOpacity>

            </View>
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
    },
    input:{
        height:40,
        width:200,
        padding:10,
        margin:5,
        borderColor:'#37cab8',
        backgroundColor:'white',
        borderWidth:2,
        borderRadius:10
    },
    button: {
        flexDirection: 'row', 
        height: 40, 
        backgroundColor: '#37cab8',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        width:200,
        borderRadius:10,
        marginBottom:50
    },
    buttontext:{
        fontSize:24,
        color:'#ffffff',
    }
})
