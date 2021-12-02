import styled from "styled-components";

import Theme from "../../common/styles/theme"

export const LoginContainer = styled.div`
  display: flex;
  width:50%;
  height: 100%;
  background-color: ${Theme.colors.white};  
  flex-direction: column;
  line-height: 30px;
  align-items: center;
`
export const TitleContainer = styled.div`
  display: flex;
  width:80%;
  height: 100%;
  margin-top: 50px;
  justify-content: flex-end;
  `
export const Title = styled.h1`
  color: ${Theme.colors.black};  
  font-weight: 700;
  font-size: 22px;
`

export const TitleWelcomeContainer = styled.div`
  display: flex;
  height: 100%;
  width:100%;
  margin-top: 35px;
  justify-content: center;
  `

export const TitleWelcome = styled.h2`
  color: ${Theme.colors.gray_text};
  font-weight: 400;
  font-size: 18px;
`

export const EmailContainer = styled.div`
  display: flex;
  height: 100%;
  margin-top: 30px;
  margin-left: -190px;
  `

export const TitleEmail = styled.h3`
  display: flex;
  width:100%;
  height: 100%;
  color: ${Theme.colors.gray_text};
  font-weight: 400;
  font-size: 9px;
`

export const PasswordContainer = styled.div`
  display: flex;
  height: 100%;
  margin-left: -230px;
  margin-top: -25px;
  `

export const TitleForgotPasswordContainer = styled.div`
  margin-top: -30px;
  display: flex;
  width:50%;
  height: 100%;
  margin-left: 340px;
  width: 150px;
`

export const TitlePassword = styled.h3`
  background-color: ${Theme.colors.white};  
  font-weight: 400;
  font-size: 9px;
  color: ${Theme.colors.gray_text};
`

export const TitleForgotPassword = styled.h3`
  display: flex;
  width:50%;
  height: 100%;
  color: ${Theme.colors.gray_text};
  font-weight: 400;
  font-size: 9px;

`

export const LoginInputContainer = styled.div`
display: flex;
width:50%;
height: 100%;
`
export const LoginInput = styled.input`
  width:100%;
  margin-left: 30px;
  background-color: ${Theme.colors.white};  
  font-weight: 700;
  border-top: none;
  border-left:none;
  border-right:none;
  height: 20px;
  padding-left: 10px;
  padding-bottom: 10px;
  border-color:${Theme.colors.gray};
  margin-top: -10px;
`

export const PasswordInputContainer = styled.div`
  display: flex;
  width:50%;
  height: 100%;
`
export const PasswordInput = styled.input`
  width:100%;
  margin-left: 30px;
  background-color: ${Theme.colors.white};  
  font-weight: 700;
  border-top: none;
  border-left:none;
  border-right:none;
  padding-left: 10px;
  padding-bottom: 10px;
  margin-top: -10px;
  height: 20px;
  border-color:${Theme.colors.gray};
`

export const TitleOrContainer = styled.div`
  display: flex;
  width:50%;
  height: 100%;
`
export const TitleOr = styled.h3`
  display: flex;
  width:50%;
  height: 100%;
  color: ${Theme.colors.gray_text};
  font-weight: 400;
  font-size: 9px;
  margin-left: 185px;
  margin-top: 25px;
`

