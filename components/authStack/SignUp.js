import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Header,Input } from 'react-native-elements';



export function SignUp({navigation}) {
    return (
        <View>
            <Header 
                backgroundColor='#37cab8'
                centerComponent={{ text: 'BEE CLOSE', style: { color: '#fff', fontSize:20 } }}
                rightComponent={<Image source={require('../../assets/AppLogo.png')} style={{width:40, height:40}}/> }
            />
            <View>
                <Text style={{color:'#37cab8', fontSize:20,fontWeight:'bold', alignSelf:'center',marginTop:10}}>Create your account!</Text>
                <View style={{flexDirection:'row'}}>
                    <Input placeholder='first name' containerStyle={{width:170,height:50}}/>
                    <Input placeholder='last name'  containerStyle={{width:170,height:50}}/>
                </View>
                <View>
                    <Input placeholder='E-mail' containerStyle={{width:200,height:60}}/>
                    <Input placeholder='create password' containerStyle={{width:200,height:50}}/>
                    <Input placeholder='confirme password' containerStyle={{width:200,height:50}}/>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Input placeholder='Country' containerStyle={{width:170,height:50}}/>
                    <Input placeholder='City' containerStyle={{width:170,height:50}}/>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Input placeholder='street' containerStyle={{width:170,height:50}}/>
                    <Input placeholder='house No.' containerStyle={{width:170,height:50}}/>
                </View>
                <View>
                    <Input placeholder='post code' containerStyle={{width:170,height:50}}/>
                </View>
                <View style={{padding:10,marginTop:10,alignItems:'center'}}>
                    <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Confirmation')}>
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
        </View>
    )
}

const styles = StyleSheet.create({
    
    button: {
        width:200,
        marginTop:10,
        alignItems: "center",
        backgroundColor: "#37cab8",
        borderRadius:10,
        padding: 10
    }
})
