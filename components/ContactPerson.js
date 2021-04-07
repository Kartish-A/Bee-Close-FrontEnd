import React from 'react';
import { Container, Card, UserImgWrapper, UserImg, UserInfoText, UserName, Interaction, ProfileBtn} from '../styles/ContactPersonStyle';
import { useNavigation } from '@react-navigation/native';


export const ContactPerson = ()=> {
    
    const navigation = useNavigation();

    return(
        <Container>
            <Card>
                <UserImgWrapper>
                    <UserImg source={{uri:'https://picsum.photos/id/27/200/300'}}/>
                </UserImgWrapper>
                <UserInfoText>
                    <UserName>Neighbor-name</UserName> 
                    <Interaction onPress={()=> navigation.navigate('UserProfile')}>
                        <ProfileBtn> see profile </ProfileBtn>  
                    </Interaction> 
                </UserInfoText> 
            </Card>
        </Container>
    );
};
