import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Container,
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
            Divider } from '../styles/PostCardStyle';



export const PostCard = () => {
    //this useNavigation function enable us to use the "navigation props" in deep nested components
    const navigation = useNavigation();
    return (
        <Container>
            <Card>
                <UserInfo>
                    <TouchableOpacity style={{flexDirection:'row'}} onPress={()=> navigation.navigate('UserProfile')}>
                        <UserImg source={{uri:'https://picsum.photos/id/1027/200/300'}} />    
                        <UserInfoText>
                            <UserName> Nicole Abraham</UserName>
                            <PostTime> hour ago</PostTime>
                        </UserInfoText>
                    </TouchableOpacity>
                </UserInfo>
                <PostText>
                    hello my beautiful Neighbors!
                    I am going in vacation for 3 weeks, and I was woundring if anyone can take care of my flowers!
                </PostText>
                <PostImg source={{uri:'https://picsum.photos/id/163/400/300'}}/>
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

    )
} 