import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import { Header,Input } from 'react-native-elements';



export function SignUp({navigation}) {
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
                    </SafeAreaView> 
                        <View style={{padding:10,marginTop:30,alignItems:'center'}}>
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
            </SafeAreaView>
        </ScrollView>
    )
}

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
