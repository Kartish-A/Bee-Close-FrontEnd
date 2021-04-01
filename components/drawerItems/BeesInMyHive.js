import React from 'react';
import { Text, View,Image } from 'react-native';
import { Header } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';


export const BeesInMyHive = ({navigation}) => {
    return (
        <View>
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
        <View>
            <Text> this is the a page to display hive's bees</Text>
        </View>
        </View>
    )
};