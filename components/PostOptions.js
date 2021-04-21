import React, { useState, useContext } from 'react';
import { AppContext } from "../App";
import axios from 'axios';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';



export const PostOptions = (props) => {

    const { state } = useContext(AppContext);

    const navigation = useNavigation();

    const [postId, setPostId] = useState(props.postId)

    const handleEdit = () => {

        navigation.navigate('CreatePost', { postId: postId })

    }
    const handleDelete = () => {
        console.log(123, postId);
        axios.delete(`https://bee-close.herokuapp.com/api/posts/${postId}`, { headers: { 'Authorization': `Bearer ${state.token}` } })
            .then(res => {
                if (res.data.success) {
                    console.log('post deleted');
                }
            })
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.firstOption}
                onPress={props.handleEdit}
            >
                <Text style={styles.optionText}>Edit post</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ padding: 10 }}
                onPress={handleDelete}
            >
                <Text style={styles.optionText}>delete post</Text>
            </TouchableOpacity>
        </View>
    )
};
const styles = new StyleSheet.create({
    container: {
        backgroundColor: '#f8f8f8',
        position: 'absolute',
        top: 45,
        right: 0,
        width: 125,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#37cab8',
        zIndex: 2
    },
    firstOption: {
        padding: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    optionText: {
        color: '#37cab8'
    }
})
