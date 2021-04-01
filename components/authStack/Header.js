import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'


export function Header() {
    return (
        <View style={styles.header}>
                <Image source={require('../../assets/AppLogo.png')} style={styles.image}/>
                <View style={styles.appName}>
                    <Text style={styles.name}>Bee close</Text>
                </View>
        </View>
    )
}
const styles= StyleSheet.create({
    header:{
        flex:0.21,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        height:'20%',
        marginTop:20,
        borderWidth:2,
        borderColor:'black'
    },
    appName:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#37cab8',
        borderRadius:10,
        width:170,
        height:50,
        marginRight:10
    },
    name:{
        fontSize:22,
        color:'white',
        fontWeight:'bold'
    },
    image: {
        width:60,
        height:60,
        marginLeft:30,
    },
})
