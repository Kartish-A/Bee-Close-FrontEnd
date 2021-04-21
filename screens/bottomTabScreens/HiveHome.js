import React, { useEffect, useContext, useState } from "react";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Header } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { PostCard } from "../../components/PostCard";
import { AppContext } from "../../App";
import { useIsFocused } from "@react-navigation/native";
import axios from "axios";


export const HiveHome = ({ navigation, route }) => {

    const { state } = useContext(AppContext);

    const [refreshPage, setRefreshPage] = useState(route.params?.refresh ?? '')

    const [posts, setPosts] = useState([]);

    const isFocused = useIsFocused();

    useEffect(() => {
        axios.get(`https://bee-close.herokuapp.com/api/posts/regular`, {
            headers: {
                'Authorization': `Bearer ${state.token}`
            }
        })
            .then(res => {
                if (res.data.success) {
                    console.log(res.data);
                    setPosts(res.data.allPosts.reverse())
                }
            })
    }, [isFocused, refreshPage])


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
                rightComponent={<Image source={require('../../assets/logo(1).png')} style={{ width: 40, height: 40 }} />}
            />
            {(posts.length) ?
                <View>
                    <FlatList
                        data={posts}
                        renderItem={({ item }) => (<PostCard postObj={{
                            username: item.user.firstName + ' ' + item.user.lastName,
                            postText: item.text,
                            postTime: item.timestamp,
                            postId: item._id,
                            userId: item.user._id
                        }}
                        />
                        )}
                        keyExtractor={post => post._id}
                    />
                </View>
                :
                <View>
                    <Text>sorry no regular posts</Text>
                </View>
            }

        </SafeAreaView>
    );
                  userphoto:item.user.photo,
                  postImg: item.photo,
};
