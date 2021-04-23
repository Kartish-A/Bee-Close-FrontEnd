import React, { useState, useContext } from "react";
import { AppContext } from "../App";
import { TouchableOpacity, View, Text, StyleSheet, TextInput, Modal, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import {
    Container, Card, UserInfo, UserImg, UserInfoText,
    UserName,
    PostTime,
    PostText,
    PostImg,
    InteractionWrapper,
    Interaction,
    InteractionText,
    Divider,
} from "../styles/PostCardStyle";
import { PostOptions } from "./PostOptions";
import { CommentCard } from './CommentCard'
import axios from "axios";

export const PostCard = (props) => {
    const { state } = useContext(AppContext);

    //this useNavigation function enable us to use the "navigation props" in deep nested components
    const navigation = useNavigation();
    //with this following useState, we enabling the postCard component to read the post-props coming from the parent Component
    const [post, setpost] = useState(props.postObj);

    //controlling the comment Modal
    const [comment, setComment] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    //controlling the post options icon
    const [showOptions, setShowOptions] = useState(false);

    // preparing the date & hours form
    const date = new Date(post.postTime);
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const screenDate = date.toLocaleDateString("de-DE", options);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const handelComment = () => {
        axios
            .put(`https://bee-close.herokuapp.com/api/updatePosts/${post.postId}`,
                {
                    author: state.username,
                    text: comment,
                    photo: post.userphoto,
                    replies: [{}],
                },
                {
                    headers: {
                        Authorization: `Bearer ${state.token}`,
                    },
                }
            )
            .then((res) => {
                if (res.data.success) {
                    console.log(res.data);
                    setModalOpen(false);
                }
            });
    };

    return (
        <Container>
            <Card>
                <View
                    style={{
                        flexDirection: "row",
                        width: "100%",
                        justifyContent: "space-between",
                    }}>
                    <UserInfo>
                        <TouchableOpacity
                            style={{ flexDirection: "row" }}
                            onPress={() =>
                                navigation.navigate("UserProfile", { username: post.username, photo: post.userphoto })
                            }>
                            <UserImg source={post.userphoto} />
                            <UserInfoText>
                                <UserName>{post.username}</UserName>
                                <PostTime>{`${screenDate}    ${hours}:${minutes}`}</PostTime>
                            </UserInfoText>
                        </TouchableOpacity>
                    </UserInfo>
                    {state.userId == post.userId ? (
                        <TouchableOpacity
                            style={{ margin: 10 }}
                            onPress={() => setShowOptions(!showOptions)}>
                            <Ionicons name="options" size={24} color={"#37cab8"} />
                        </TouchableOpacity>
                    ) : (
                        <View>
                            <Text></Text>
                        </View>
                    )}

                    {showOptions ? (
                        <View>
                            <PostOptions postId={post.postId} />
                        </View>
                    ) : (
                        <View>
                            <Text></Text>
                        </View>
                    )}
                </View>
                {post.postText ? (
                    <PostText>{post.postText}</PostText>
                ) : (
                    <PostText></PostText>
                )}
                {post.postImg ? (
                    <PostImg source={post.postImg} />
                ) : (
                    <PostText></PostText>
                )}
                <Divider />
                <InteractionWrapper>
                    <Interaction>
                        <Ionicons name="heart-outline" size={20} color={"#37cab8"} />
                        <InteractionText>like</InteractionText>
                    </Interaction>

                    <Interaction onPress={() => setModalOpen(!modalOpen)}>
                        <Ionicons
                            name="md-chatbubble-outline"
                            size={20}
                            color={"#37cab8"}
                        />
                        <InteractionText>Comment</InteractionText>
                    </Interaction>

                    <Modal animationType={"slide"} visible={modalOpen} transparent={true}>
                        <View>
                            <ScrollView>
                                <View style={styles.comment}>
                                    <TextInput
                                        style={styles.commentInput}
                                        placeholder="write a comment!"
                                        multiline
                                        numberOfLines={5}
                                        onChangeText={(text) => setComment(text)}
                                    />
                                    <View>
                                        <TouchableOpacity
                                            style={styles.commentBtn}
                                            onPress={handelComment}>
                                            <Text style={{ color: "#fff" }}>comment</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={styles.cancelBtn}
                                            onPress={() => setModalOpen(!modalOpen)}>
                                            <Text style={{ color: "#000" }}>Cancel</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    </Modal>

                    <Interaction>
                        <Ionicons name="bookmark-outline" size={20} color={"#37cab8"} />
                        <InteractionText>save</InteractionText>
                    </Interaction>
                </InteractionWrapper>
                <CommentCard postId={post.postId} />
            </Card>
        </Container>
    );
};
const styles = new StyleSheet.create({
    comment: {
        width: "80%",
        height: 230,
        padding: 5,
        alignSelf: "center",
        marginTop: 300,
        borderWidth: 1,
        borderColor: "#37cab8",
        borderRadius: 20,
        backgroundColor: "#f7f7f7",
        justifyContent: "space-between",
    },
    commentInput: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 20,
        height: "60%",
        paddingHorizontal: 10,
        margin: 5,
    },
    commentBtn: {
        backgroundColor: "#37cab8",
        borderRadius: 5,
        padding: 5,
        alignItems: "center",
        margin: 5,
    },
    cancelBtn: {
        backgroundColor: "#ccc",
        borderRadius: 5,
        padding: 5,
        alignItems: "center",
        margin: 5,
    },
});