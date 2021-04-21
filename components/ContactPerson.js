import React, { useState, useContext } from 'react';
import { Container, Card, UserImgWrapper, UserImg, UserInfoText, UserName, Interaction, ProfileBtn } from '../styles/ContactPersonStyle';
import { useNavigation } from '@react-navigation/native';


export const ContactPerson = (props) => {

    const navigation = useNavigation();

    const [user, setUser] = useState(props.usersObj)
    return (
        <Container>
            <Card>
                <UserImgWrapper>
                    <UserImg source={user.photo}/>
                </UserImgWrapper>
                <UserInfoText>
                    <UserName>{user.username}</UserName> 
                    <Interaction onPress={()=> navigation.navigate('UserProfile', { username: user.username, email: user.email, photo:user.photo })}>
                        <ProfileBtn> see profile </ProfileBtn>  
                    </Interaction> 
                </UserInfoText> 
            </Card>
        </Container>
    );
};
