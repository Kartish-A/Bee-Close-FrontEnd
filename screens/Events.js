import React, { useState, useContext, useEffect } from 'react';
import { Image, TouchableOpacity, StyleSheet, ScrollView, FlatList, View, Text, SafeAreaView } from 'react-native';
import { Header } from 'react-native-elements'
import { EventCard } from '../components/EventCard'
import { Ionicons } from '@expo/vector-icons';
import { AppContext } from '../App';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios'


export const Events = ({ navigation }) => {

    const { state } = useContext(AppContext);

    const [posts, setPosts] = useState([]);

    const isFocused = useIsFocused();

    useEffect(() => {
        axios.get(`https://bee-close.herokuapp.com/api/posts/event`, {
            headers: {
                'Authorization': `Bearer ${state.token}`
            }
        })
            .then(res => {
                if (res.data.success) {
                    setPosts(res.data.allPosts.reverse())
                }
            })
    }, [isFocused])

    return (
        <SafeAreaView style={{ flex: 1, width: '100%' }}>
            <Header
                backgroundColor='#37cab8'
                leftComponent={
                    <TouchableOpacity onPress={() => navigation.openDrawer()} >
                        <Ionicons name="menu" size={30} color='#fff' />
                    </TouchableOpacity>
                }
                centerComponent={{ text: 'BEE CLOSE', style: { color: '#fff', fontSize: 20 } }}
                rightComponent={<Image source={require('../assets/logo(1).png')} style={{ width: 40, height: 40 }} />
                }
            />
            {(posts.length) ?
                <FlatList
                    data={posts}
                    renderItem={({ item }) => (<EventCard postObj={{
                        username: item.user.firstName + ' ' + item.user.lastName,
                        postText: item.text,
                        postImg: item.image,
                        postTime: item.timestamp,
                        postId: item._id,
                        userId: item.user._id,
                        userphoto: item.user.photo
                    }}
                    />
                    )}
                    keyExtractor={post => post._id}
                />
                :
                <View style={styles.container}>
                    <Text style={{ fontSize: 24 }}>sorry no Events posts</Text>
                </View>
            }
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#f7f7f7',
    }
})