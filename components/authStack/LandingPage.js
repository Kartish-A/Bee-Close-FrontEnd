import React from 'react'
import { View, Text, StyleSheet, Image, Button, TouchableOpacity} from 'react-native'
import { Header } from '../authStack/Header';


export const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
);  

export function LandingPage({navigation}) {
    return (
        <ScreenContainer>
            <Header/>

            <View style={styles.banner}>
                <Text style={styles.upgrade}>Upgrade your</Text>
                <View style={styles.bannerSecondLine}>
                    <Text style={{fontSize:26,fontWeight:'bold', }}>social</Text>
                    <Text style={{fontSize:26,fontWeight:'bold', color:'#fbbc04',marginLeft:10 }}>Network</Text>
                </View>
            </View>

            <Text>I am a LandingPage</Text>
            <TouchableOpacity activeOpacity={0.95} style={styles.button} onPress={()=> navigation.navigate('SignUp')}>
                <Text style={styles.buttontext}>Get Started</Text>
            </TouchableOpacity>
        </ScreenContainer>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor:'#f7f7f7',
    },
    
    banner:{
        justifyContent:'center',
        width:200,
        height:100,
        borderWidth:2,
        borderColor:'#37cab8',
        borderRadius:10
    },
    upgrade:{
        fontSize:26,
        color:'#37cab8',
        fontWeight:'bold'
    },
    bannerSecondLine:{
        flexDirection:'row',
        justifyContent:'center'
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
});