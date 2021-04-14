import React, {useState, useContext, useEffect} from 'react';
import { Image, TouchableOpacity, ScrollView, FlatList, View, Text} from 'react-native';
import { Header } from 'react-native-elements'
import { EventCard } from '../../components/EventCard'
import { Ionicons } from '@expo/vector-icons';
import {AppContext} from '../../App';
// import {useIsFocused} from '@react-navigation/native';
import axios from 'axios'


export const Events = ({navigation}) => {

    const [posts, setPosts] = useState([])
    const {state} = useContext(AppContext)
    // const isFoucsed = useIsFocused()
    useEffect(() => {
        axios.get(`https://bee-close.herokuapp.com/api/posts/event`,{headers:{
            'Authorization':`Bearer ${state.token}`
        }})
        .then(res=> {
            console.log(res);
            if(res.data.success){
                setPosts(res.data.allPosts)
            }
        })
    }, [])
    

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
                rightComponent={<Image source={require('../../assets/logo(1).png')} style={{width:40, height:40}}/> }
            />
            {(posts.length)?
            <FlatList
                data={posts}
                renderItem={({item})=> (<EventCard postObj={{
                    username: item.user.firstName+ ' '+item.user.lastName,
                    postText: item.text,
                    postImg:  item.image,
                    postTime: item.timestamp
            }}/>)}
            keyExtractor={post => post._id}
            />
            : 
            <View>
                <Text>sorry no Events posts</Text>
            </View>
            }
        
        </View>
    )
}

