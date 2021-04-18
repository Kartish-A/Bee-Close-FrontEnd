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
    //with this following useState, we enabling the postCard component to read the post-props coming from the parent Component
    const [post, setpost] = useState(props.postObj)

    //controlling the comment Modal
    const [comment, setComment] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    //controlling the post options icon
    const [showOptions, setShowOptions] = useState(false)

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
                    <TouchableOpacity style={{margin:10}} onPress={ ()=> setShowOptions(!showOptions) }>
                        <Ionicons name='options' size={24} color={'#37cab8'}/>
                    </TouchableOpacity>
                    {showOptions?
                    <View>
                    <PostOptions postId={post.postId}/>
                    </View>
                    :
                    <View>
                        <Text></Text>
                    </View>
                    }
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

                    <Interaction onPress={()=>setModalOpen(!modalOpen)}>
                        <Ionicons name="md-chatbubble-outline" size={20} color={'#37cab8'}/>
                        <InteractionText>Comment</InteractionText>      
                    </Interaction>

                    <Modal 
                        animationType={'slide'}
                        visible={modalOpen}
                        transparent={true}
                        >
                        <View>
                        <ScrollView>
                            <View style={styles.comment}>
                                <TextInput
                                    style={styles.commentInput}
                                    placeholder="write a comment!"
                                    multiline
                                    numberOfLines={5}
                                    onChangeText={(comment)=> setComment(comment)}
                                />
                                <View >
                                    <TouchableOpacity style={styles.commentBtn} onPress={ ()=> {} }>
                                        <Text style={{color:'#fff'}}>comment</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cancelBtn} onPress={()=> setModalOpen(!modalOpen)}>
                                        <Text style={{color:'#000'}}>Cancel</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                        </View>    
                    </Modal>
                    
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
