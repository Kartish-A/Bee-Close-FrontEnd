import React, { useState, useContext } from "react";
import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { AppContext } from "../App";
import {
  Container,
  Card,
  UserInfo,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  PostText,
  PostImg,
  InteractionWrapper,
  Interaction,
  InteractionText,
  Divider,
} from "../styles/PostCardStyle";

export const PostCard = (props) => {
<<<<<<< HEAD
  //this useNavigation function enable us to use the "navigation props" in deep nested components
  const navigation = useNavigation();
  const [post, setpost] = useState(props.postObj);
  const { state } = useContext(AppContext);

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
              onPress={() => navigation.navigate("UserProfile")}>
              <UserImg
                source={{ uri: "https://picsum.photos/id/1027/200/300" }}
              />
              <UserInfoText>
                <UserName> {post.username}</UserName>
                <PostTime>{post.postTime}</PostTime>
              </UserInfoText>
            </TouchableOpacity>
          </UserInfo>
          <TouchableOpacity style={{ margin: 10 }}>
            <Ionicons name="options" size={24} color={"#37cab8"} />
          </TouchableOpacity>
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

          <Interaction>
            <Ionicons
              name="md-chatbubble-outline"
              size={20}
              color={"#37cab8"}
            />
            <InteractionText>Comment</InteractionText>
          </Interaction>
=======
    //this useNavigation function enable us to use the "navigation props" in deep nested components
    const navigation = useNavigation();
    const [post, setpost] = useState(props.postObj)
    return (
        <Container>
            <Card>
                <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
                    <UserInfo>
                        <TouchableOpacity style={{flexDirection:'row'}} onPress={()=> navigation.navigate('UserProfile')}>
                            <UserImg source={{uri:'https://picsum.photos/id/1027/200/300'}} />    
                            <UserInfoText>
                                <UserName>{post.username}</UserName>
                                <PostTime>{post.postTime}</PostTime>
                            </UserInfoText>
                        </TouchableOpacity>
                    </UserInfo>
                    <TouchableOpacity style={{margin:10}}>
                        <Ionicons name='options' size={24} color={'#37cab8'}/>
                    </TouchableOpacity>
                </View>
                { post.postText?
                <PostText>
                    {post.postText}
                </PostText>
                :<PostText></PostText>
                }
                { post.postImg?
                <PostImg source={post.postImg}/>
                :
                <PostText></PostText>
                }
                <Divider/>
                <InteractionWrapper>
                    <Interaction>
                        <Ionicons name='heart-outline' size={20} color={'#37cab8'}/>
                        <InteractionText>like</InteractionText>
                    </Interaction>

                    <Interaction>
                        <Ionicons name="md-chatbubble-outline" size={20} color={'#37cab8'}/>
                        <InteractionText>Comment</InteractionText>
                    </Interaction>
                    
                    <Interaction>
                        <Ionicons name='bookmark-outline' size={20} color={'#37cab8'}/>
                        <InteractionText>save</InteractionText>
                    </Interaction>
                </InteractionWrapper>
            </Card>
        </Container>
>>>>>>> main

          <Interaction>
            <Ionicons name="bookmark-outline" size={20} color={"#37cab8"} />
            <InteractionText>save</InteractionText>
          </Interaction>
        </InteractionWrapper>
      </Card>
    </Container>
  );
};
