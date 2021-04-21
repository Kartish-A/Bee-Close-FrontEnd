import React, { useState, useEffect, useContext } from 'react';
import { Image, ScrollView, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { Header } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import { ContactPerson } from '../../components/ContactPerson'
import { useIsFocused } from '@react-navigation/native'
import axios from 'axios'
import { AppContext } from '../../App'

export const BeesInMyHive = ({ navigation }) => {

    const { state } = useContext(AppContext);

    const [users, setUsers] = useState({});

    const isFocused = useIsFocused();

    useEffect(() => {
        axios.get(`https://bee-close.herokuapp.com/api/users/beesinmyhive`, {
            headers: {
                'Authorization': `Bearer ${state.token}`
            }
        })
            .then(res => {
                if (res.data.success) {
                    setUsers(res.data.beesInMyHive.users)
                    console.log(res.data.beesInMyHive.users);
                }
            })
    }, [isFocused])
    return (
        <SafeAreaView>
            <Header
                backgroundColor='#37cab8'
                leftComponent={
                    <TouchableOpacity onPress={() => navigation.openDrawer()} >
                        <Ionicons name="menu" size={30} color='#fff' />
                    </TouchableOpacity>
                }
                centerComponent={{ text: 'BEE CLOSE', style: { color: '#fff', fontSize: 20 } }}
                rightComponent={<Image source={require('../../assets/logo(1).png')} style={{ width: 40, height: 40 }} />}
            />
            <FlatList
                data={users}
                renderItem={({ item }) => (<ContactPerson usersObj={{
                    username: item.firstName + ' ' + item.lastName,

                }} />)}
                keyExtractor={user => user._id}
            />
        </SafeAreaView>
    )
};

