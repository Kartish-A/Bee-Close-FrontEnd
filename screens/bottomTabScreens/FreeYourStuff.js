import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet,Image} from 'react-native'
import { Header } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';


export const FreeYourStuff = ({navigation}) => {
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
                rightComponent={<Image source={require('../../assets/logo(1).png')} style={{width:40, height:40}}/> }
        />
        <View style={styles.container}>
            <Text style={{fontSize:24}}>This is the Hive mini "free things!"</Text>
            <Text style={{padding:30}}>here you can give away stuff that you don't really need, and you think it might be useful for your neighbors</Text>
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'#f7f7f7',
    }
})

