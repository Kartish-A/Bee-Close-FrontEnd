import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Container, Card, UserInfo, UserImg, UserInfoText, UserName, PostTime, PostText, PostImg, InteractionWrapper, Interaction, InteractionText, Divider } from '../styles/EventCardStyle';



export const EventCard = () => {
    return (
        <Container>
            <Card>
                <UserInfo>
                    <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>{}}>
                        <UserImg source={{uri:'https://picsum.photos/id/447/60/60'}} />    
                        <UserInfoText>
                            <UserName> Joachim Sheffer</UserName>
                            <PostTime> hour ago</PostTime>
                        </UserInfoText>
                    </TouchableOpacity>
                </UserInfo>
                <PostText>
                    My dear Neighbors!
                    I am graduating on 22th of April and I really would like to celebrate this beautiful event, so for this I am making a party to which I invited all my friends and I thought that it would be even better if I invited my Neighbors as well! 
                        We may stay a bit late!
                </PostText>
                <PostImg source={{uri:'https://picsum.photos/id/452/400/300'}}/>
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