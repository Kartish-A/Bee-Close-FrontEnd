import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {Header} from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';


export const SavedEvents = ({navigation}) => {
    return (
        <View>
            <Header 
                    backgroundColor='#ffffff'
                    leftComponent={
                        <TouchableOpacity onPress={()=>navigation.openDrawer()} >
                            <Ionicons name="menu" size={30} color='#37cab8'  />
                        </TouchableOpacity>
                    }
            />
            <Text>This is th SavedEvents screen</Text>
        </View>
    )
}

