import React, {useState} from 'react';
import { Container, Card, UserImgWrapper, UserImg, UserInfoText, UserName, Interaction, ProfileBtn} from '../styles/ContactPersonStyle';
import { useNavigation } from '@react-navigation/native';


export const ContactPerson = (props)=> {
    
    const navigation = useNavigation();
    const [user, setUser] = useState(props.usersObj)
    return(
        <Container>
            <Card>
                <UserImgWrapper>
                    <UserImg source={user.userImg}/>
                </UserImgWrapper>
                <UserInfoText>
                    <UserName>{user.username}</UserName> 
                    <Interaction onPress={()=> navigation.navigate('UserProfile', { username: user.username, email: user.email, userImg:user.photo })}>
                        <ProfileBtn> see profile </ProfileBtn>  
                    </Interaction> 
                </UserInfoText> 
            </Card>
        </Container>
    );
};
