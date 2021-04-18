import React, { useState, useContext, useEffect } from 'react';
import { Image, TouchableOpacity, ScrollView, FlatList, View, Text, StyleSheet, SafeAreaView} from 'react-native';
import { Header } from 'react-native-elements'
import { EventCard } from '../../components/EventCard'
import { Ionicons } from '@expo/vector-icons';
import { AppContext } from '../../App';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios'


export const Events = ({navigation}) => {

    const [posts, setPosts] = useState([]);

    const {state} = useContext(AppContext);

    const isFocused = useIsFocused();

    useEffect(() => {
        axios.get(`https://bee-close.herokuapp.com/api/posts/event`,{headers:{
            'Authorization':`Bearer ${state.token}`
        }})
        .then(res=> {
            if(res.data.success){
                setPosts(res.data.allPosts.reverse())
            }
        })
    }, [isFocused])
    

    return (
        <SafeAreaView style={{flex:1,width:'100%'}}>
            <ScrollView >
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
                {(posts.length)?
                <FlatList
                    data={posts}
                    renderItem={({item})=> (<EventCard postObj={{
                        username: item.user.firstName + ' '+ item.user.lastName,
                        postText: item.text,
                        postImg:  item.image,
                        postTime: item.timestamp,
                        postId:   item._id
                    }}
                    />
                    )}
                    keyExtractor={post => post._id}
                    // (item: object, index: number) => string;
                />
                : 
                <View>
                    <Text>sorry no Events posts</Text>
                </View>
                } 
            </ScrollView>
        </SafeAreaView>
    )
};
