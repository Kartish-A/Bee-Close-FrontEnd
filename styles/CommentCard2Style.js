import styled from 'styled-components/native';


export const Container = styled.View`
    align-items: center;
    background-color: #37cab8;
    border-width: 1px;
    border-color: #37cab8;
    border-radius: 10px;
    padding: 7px;
    
`;

export const Card = styled.View`
    background-color: #f7f7f7;
    width: 100%;
    border-radius: 10px;
    border-width: 1px;
    border-color: #37cab8;
    margin-top:5px;
    flex-grow:1
`;

export const UserInfo = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    padding: 10px;
`;

export const UserInfoText = styled.View`
    flex-direction: row;
    justify-content: center;
    margin-left: 5px;
`;

export const UserName = styled.Text`
    font-size: 14px;
    font-weight: bold;
`;

export const CommentTime = styled.Text`
    font-size: 12px;
    color: #666;
`;
export const CommentText = styled.Text`
    font-size: 14px;
    color: #000000;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 15px;
    
`;
