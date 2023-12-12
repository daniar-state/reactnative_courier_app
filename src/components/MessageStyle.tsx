import styled from 'styled-components'

//@ts-ignore
export const Container = styled.View`
    flex: 1;
    padding-left: 20px;
    padding-right: 20px;
    align-items: center;
    background-color: #ffffff;
`
//@ts-ignore
export const Card = styled.TouchableOpacity`
    width: 100%;
`
//@ts-ignore
export const UserInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
`
//@ts-ignore
export const UserImgWrapper = styled.View`
    padding-top: 15px;
    padding-bottom: 15px;
`
//@ts-ignore
export const UserImg = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`
//@ts-ignore
export const TextSection = styled.View`
    flex-direction: column;
    justify-content: center;
    padding: 15px;
    padding-left: 0;
    margin-left: 10px;
    width: 300px;
    border-bottom-width: 1px;
    border-bottom-color: #cccccc;
`
//@ts-ignore
export const UserInfoText = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5px;
`
//@ts-ignore
export const UserName = styled.Text`
    font-size: 14px;
    font-weight: bold;
    font-family: 'Lato-Regular';
`
//@ts-ignore
export const PostTime = styled.Text`
    font-size: 12px;
    color: #666;
    font-family: 'Lato-Regular';
`
//@ts-ignore
export const MessageText = styled.Text`
    font-size: 14px;
    color: #333333;
`
