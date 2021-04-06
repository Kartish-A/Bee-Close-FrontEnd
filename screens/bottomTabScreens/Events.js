import React from 'react';
import { StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import { Header } from 'react-native-elements'
import { EventCard } from '../../components/EventCard'
import { Ionicons } from '@expo/vector-icons';


export const Events = ({navigation}) => {
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
            <EventCard/>
        </ScrollView>
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
