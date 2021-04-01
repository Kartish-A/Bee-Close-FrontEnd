import React from 'react'
import { View, Text, StyleSheet, Image, Button, TouchableOpacity} from 'react-native'
import { Header } from 'react-native-elements';


export function LandingPage({navigation}) {
    return (
        <View>
            <Header 
                backgroundColor='#37cab8'
                centerComponent={{ text: 'BEE CLOSE', style: { color: '#fff', fontSize:20 } }}
                rightComponent={<Image source={require('../../assets/AppLogo.png')} style={{width:40, height:40}}/> }
            />
            <View style={styles.container}>
                <View style={styles.banner}>
                    <Text style={styles.upgrade}>Upgrade your</Text>
                    <View style={styles.secondline}>
                        <Text style={styles.upgrade}>social</Text>
                        <Text style={styles.network}>Network</Text>
                    </View>
                </View>
            </View>
            <View style={styles.welcome}>
                <Text style={styles.welcomeText}>Welcome to Bee Close App!</Text>
                <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('SignUp')}>
                    <Text style={{color:'#fff', fontSize:18,fontWeight:'bold'}}>Get started</Text>
                </TouchableOpacity>
            </View>
            <View style={{padding:10,marginTop:20,alignItems:'center'}}>
                <Text>already have an account?</Text>
                <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('SignIn')}>
                    <Text style={{color:'#fff', fontSize:18,fontWeight:'bold'}}>Sign in</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        width:'100%',
        height:200,
        alignSelf:'center',
        alignItems:'center', 
        justifyContent:'center',
        margin:10,
    },
    banner:{
        width: 280,
        height:100 ,
        borderWidth:4,
        borderColor:'#37cab8',
        borderRadius:10,
        alignSelf:'flex-start',
        margin:5,
        
    },
    upgrade:{
        fontSize:34,
        color:'#37cab8',
        paddingLeft:10
    },
    secondline:{
        width:280,
        flexDirection:'row',
        alignSelf:'center',
    },
    network:{
        fontSize:34,
        color:'#fbbc04',
        fontWeight:'bold',
        marginLeft:2
    },
    welcome:{
        marginTop:80,
        alignItems:'center'
    },
    welcomeText:{
        fontSize:24,
        color:'#37cab8'

    },
    button:{
        width:200,
        marginTop:10,
        alignItems: "center",
        backgroundColor: "#37cab8",
        borderRadius:10,
        padding: 10
    }
})
