import styled from 'styled-components/native';


export const Container = styled.View`
    align-items: center;
    padding: 20px;
`;

export const Card = styled.View`
    background-color: #ccc;
    width: 100%;
    margin-bottom: 5px;
    border-radius: 10px;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    padding: 15px;
    background-color: #37cab8;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

export const UserImg = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border-color: #ffffff;
    border-width: 1px;
    
`;
export const UserInfoText = styled.View`
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
`;

export const UserName = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #ffffff
`;

export const PostTime = styled.Text`
    font-size: 12px;
    color: #ffffff;
`;
export const PostText = styled.Text`
    font-size: 14px;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 15px;
    color: #000000;
`;

export const PostImg = styled.Image`
    width: 100%;
    height: 250px;
    margin-top: 10px;
`;

export const InteractionWrapper = styled.View`
    flex-direction: row;
    justify-content: space-around;
    padding: 15px;
    border-color:#000000;
    border-width:1px
    
`;

export const Interaction = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 2px 5px;
    background-color:#37cab8;
`;

export const InteractionText = styled.Text`
    font-size: 18px;
    color: #ffffff;
    margin: 5px;
`;

