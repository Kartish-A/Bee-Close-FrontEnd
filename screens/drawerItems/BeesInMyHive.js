import React from 'react';
import { Image, ScrollView, TouchableOpacity} from 'react-native';
import { Header } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import {ContactPerson} from '../../components/ContactPerson'


export const BeesInMyHive = ({navigation}) => {
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
                rightComponent={<Image source={require('../../assets/logo(1).png')} style={{width:40, height:40}}/> }
            />
            <ContactPerson/>
            <ContactPerson/>
            <ContactPerson/>
            <ContactPerson/>
            <ContactPerson/>
            <ContactPerson/>
            <ContactPerson/>
            <ContactPerson/>
            <ContactPerson/>
            <ContactPerson/>
        </ScrollView>
    )
};

