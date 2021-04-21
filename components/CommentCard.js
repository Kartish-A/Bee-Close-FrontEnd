import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App';
import { View } from 'react-native';
import { Container, Card, UserInfo, UserInfoText, UserName, CommentTime, CommentText } from '../styles/CommentCardStyle';
import axios from 'axios';
import { useIsFocused } from '@react-navigation/native'



export const CommentCard = (props) => {

    const { state } = useContext(AppContext);

    const [comments, setComments] = useState([]);

    const isFocused = useIsFocused();

    useEffect(() => {
        console.log(props.postId);
        axios.get(`https://bee-close.herokuapp.com/api/posts/getsinglepost/${props.postId}`, {
            headers: {
                'Authorization': `Bearer ${state.token}`
            }
        })
            .then(res => {
                if (res.data.success) {
                    console.log(res.data);
                    setComments(res.data.post.comments)
                }
            })
    }, [isFocused])



    return (

        <Container>
            { comments ? comments.map(comment =>
                <Card>
                    <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between' }}>
                        <UserInfo>
                            <UserInfoText>
                                <UserName> {comment.author} </UserName>
                                <CommentTime> {comment.timestamp} </CommentTime>
                            </UserInfoText>
                        </UserInfo>
                    </View>
                    <CommentText> {comment.text} </CommentText>
                </Card>
            )
                :
                <View>
                    <CommentText>no comments</CommentText>
                </View>
            }

        </Container>
    )
};
