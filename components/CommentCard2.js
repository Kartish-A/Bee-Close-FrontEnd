import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Container, Card, UserInfo, UserInfoText, UserName, CommentTime, CommentText } from '../styles/CommentCard2Style';
import axios from 'axios';
import { useIsFocused } from '@react-navigation/native'



export const CommentCard2 = (props) => {

    const { state } = useContext(AppContext);

    const [comments, setComments] = useState([]);

    const [seeComments, setSeeComments] = useState(false)

    const isFocused = useIsFocused();

    useEffect(() => {

        axios.get(`https://bee-close.herokuapp.com/api/posts/getsinglepost/${props.postId}`, {
            headers: {
                'Authorization': `Bearer ${state.token}`
            }
        })
            .then(res => {
                if (res.data.success) {
                    setComments(res.data.post.comments.reverse())
                }
            })
    }, [isFocused])



    return (
        <View>
            <TouchableOpacity onPress={() => setSeeComments(!seeComments)}  >
                <Text style={styles.seeComments}>see comments..</Text>
            </TouchableOpacity>
            {seeComments && comments ? comments.map(comment =>
                <Container>
                    <Card>
                        <View style={{ flexDirection: 'row', width: '96%', justifyContent: 'space-between' }}>
                            <UserInfo>
                                <UserInfoText>
                                    <UserName> {comment.author} </UserName>
                                    <CommentTime> {comment.timestamp} </CommentTime>
                                </UserInfoText>
                            </UserInfo>
                        </View>
                        <CommentText> {comment.text} </CommentText>
                    </Card>
                </Container>
            )
                :
                <Text></Text>
            }
        </View>
    )
};
const styles = new StyleSheet.create({
    seeComments: {
        padding: 5,
        paddingLeft: 5,
        color: '#ffffff',
        fontSize: 16
    }
})