import React, { useEffect, useContext, useState } from 'react';
import { Image, View, Text, TouchableOpacity, FlatList, ScrollView, SafeAreaView } from 'react-native';
import { Header } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import { PostCard } from '../../components/PostCard'
import { AppContext } from '../../App';
import { useIsFocused } from '@react-navigation/native'
import axios from 'axios'


export const HiveHome = ({ navigation }) => {

    const [posts, setPosts] = useState([]);

    const { state } = useContext(AppContext);

    const isFocused = useIsFocused();

    useEffect(() => {
        axios.get(`https://bee-close.herokuapp.com/api/posts/regular`, {
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
            <ScrollView>
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
                {(posts.length) ?
                    <FlatList
                        data={posts}
                        renderItem={({ item }) => (<PostCard postObj={{
                            username: item.user.firstName + ' ' + item.user.lastName,
                            postText: item.text,
                            postImg: item.image,
                            postTime: item.timestamp,
                            postId: item._id,
                            userId: item.user._id
                        }}
                        />
                        )}
                        keyExtractor={post => post._id}
                    />
                    :
                    <View>
                        <Text>sorry no regular posts</Text>
                    </View>
                }
            </ScrollView>
        </SafeAreaView>
    );
};
