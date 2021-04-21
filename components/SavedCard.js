import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Container, Card, UserInfo, UserImg, UserInfoText, UserName, PostTime, PostText, PostImg, InteractionWrapper, Interaction, InteractionText } from '../styles/SavedCardStyle';

export const SavedCard = () => {

    return (
        <Container>
            <Card>
                <UserInfo>
                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => { }}>
                        <UserImg source={{ uri: 'https://picsum.photos/id/447/60/60' }} />
                        <UserInfoText>
                            <UserName>username</UserName>
                            <PostTime>post time</PostTime>
                        </UserInfoText>
                    </TouchableOpacity>
                </UserInfo>
                <PostText> here comes the post text  </PostText>
                <PostImg />
                <Interaction>
                    <InteractionText>
                        unsave
                        </InteractionText>
                </Interaction>
            </Card>
        </Container>
    )
}
