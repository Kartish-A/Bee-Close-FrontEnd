import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import { Header } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import { PostCard } from '../../components/PostCard'


export const HiveHome = ({navigation}) => {
    return (
        <ScrollView>
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
            <PostCard/>
        </ScrollView>
    );
};
