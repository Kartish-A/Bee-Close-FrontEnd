import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';



export const HiveHome = ({navigation}) => {
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
                    <Text style={{fontSize:24}}>This is Main Heiv page</Text>
                    <Text>here you can see news from Bees from your Heiv!</Text>
                </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor:'#f7f7f7',
    }
})
    