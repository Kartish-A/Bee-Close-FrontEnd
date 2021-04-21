import styled from 'styled-components/native';


export const Container = styled.View`
    align-items: center;
    background-color: #fff;
    padding: 20px;
`;

export const Card = styled.View`
    background-color: #fff;
    width: 100%;
    border-radius: 5px;
    border-width: 1px;
    border-color: #ccc;
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
