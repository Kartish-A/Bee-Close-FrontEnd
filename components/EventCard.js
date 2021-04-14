import React, {useState} from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Container, Card, UserInfo, UserImg, UserInfoText, UserName, PostTime, PostText, PostImg, InteractionWrapper, Interaction, InteractionText } from '../styles/EventCardStyle';


export const EventCard = (props) => {

    const navigation = useNavigation();
    const [post, setpost] = useState(props.postObj)

    return (
        <Container>
            <Card>
            <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
                <UserInfo>
                    <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>navigation.navigate('UserProfile')}>
                        <UserImg source={{uri:'https://picsum.photos/id/447/60/60'}} />    
                        <UserInfoText>
                            <UserName>{post.userName}</UserName>
                            <PostTime>{post.postTime}</PostTime>
                        </UserInfoText>
                    </TouchableOpacity>
                </UserInfo>
                <TouchableOpacity style={{margin:10}}>
                        <Ionicons name='options' size={24} color={'#fff'}/>
                    </TouchableOpacity>
            </View>
            { post.postText ?       
                <PostText>
                    {post.postText}
                </PostText>
                :
                <PostText></PostText>
            }
            { post.postImg ?
                <PostImg source={post.postImg} />
                :
                <PostText></PostText>
            }    
                <InteractionWrapper>
                    <Interaction>
                        <Ionicons name='add-sharp' size={20} color={'#ffffff'}/>
                        <InteractionText>react</InteractionText>
                    </Interaction>
                    <Interaction>
                        <Ionicons name='remove-sharp' size={20} color={'#ffffff'}/>
                        <InteractionText>react</InteractionText>
                    </Interaction>

                    <Interaction>
                        <Ionicons name="md-chatbubble-outline" size={20} color={'#ffffff'}/>
                        <InteractionText>Comment</InteractionText>
                    </Interaction>
                    
                    <Interaction>
                        <Ionicons name='alarm-outline' size={20} color={'#ffffff'}/>
                        <InteractionText>remind me</InteractionText>
                    </Interaction>
                </InteractionWrapper>

            </Card>
        </Container>

    )
} 