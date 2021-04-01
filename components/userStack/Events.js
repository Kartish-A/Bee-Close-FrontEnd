import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';


export const Events = ({navigation}) => {
    return (
        <View style={{ flex:1, width:'100%', justifyContent: 'center' }}>
        <Header 
                backgroundColor='#37cab8'
                leftComponent={
                    <TouchableOpacity onPress={()=>navigation.openDrawer()} >
                        <Ionicons name="menu" size={30} color='#fff' />
                    </TouchableOpacity>
                }
                centerComponent={{ text: 'BEE CLOSE', style: { color: '#fff', fontSize:20 } }}
                rightComponent={<Image source={require('../../assets/AppLogo.png')} style={{width:40, height:40}}/> }
        />
        <View style={styles.container}>
            <Text style={{fontSize:24}}>This is the Events page</Text>
            <Text style={{padding:5,margin:5}}> here you can create and share events and see your Neighbors Events</Text>
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#f7f7f7',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
