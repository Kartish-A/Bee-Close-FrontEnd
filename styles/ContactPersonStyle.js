import styled from 'styled-components/native';


export const Container = styled.View`
    padding-left: 20px;
    padding-right: 20px;
    align-items: center;
    background-color: transparent;
    margin-top:10px;
`;

export const Card = styled.View`
    flex-direction: row;
    justify-content: space-between;
    background-color: #37cab8;
    border-radius:15px;
    margin-bottom:10px;
    width: 94%;
    height:90px;
`;

export const UserImgWrapper = styled.View`
    padding: 15px;
    justify-content:center;
`;

export const UserImg = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border-color: #ffffff;
    border-width:2px;
`;

export const UserInfoText = styled.View`
    flex-direction: row;
    width:250px;
    padding-right:10px;
    justify-content: space-around;
    align-items:center;
`;

export const UserName = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color:#ffffff
`;

export const Interaction = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border-color: #ffffff;
    border-width: 1px;
    padding: 5px;
    background-color: transparent;
    width:90px;
    height:30px;
`;

export const ProfileBtn = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color:#ffffff
`;