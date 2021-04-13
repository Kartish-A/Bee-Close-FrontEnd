import React, { useEffect, useContext, useState } from 'react';
import { Image, TouchableOpacity, ScrollView,Text, FlatList} from 'react-native';
import { Header } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import { PostCard } from '../../components/PostCard'
import axios from 'axios'
import { AppContext } from '../../App';


export const HiveHome = ({navigation}) => {

    const [posts, setPosts] = useState([])
    const {state} = useContext(AppContext)

    useEffect(() => {
        axios.get(`https://bee-close.herokuapp.com/api/posts/regular`,{headers:{
            'Authorization':`Bearer ${state.token}`
        }})
        .then(res=> {
            if(res.data.success){
                setPosts(res.data.allPosts)
                console.log(data);
            }
        })
    }, [])

    const renderPost = ({post}) => {
        <PostCard postObj={{
            username: post.user.firstName+' '+post.user.lastName,
            postText: post.text,
            postImg: post.image,
            postTime: post.timestamp
        }}/>
    }

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
            <FlatList
                data={posts}
                renderItem={renderPost}
                keyExtractor={post => post._id}
            />
        </ScrollView>
    );
};
