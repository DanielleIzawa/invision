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

export const GettingStartedContainer = styled.div`
  display: flex;
  height: 100%;
  width:100%;
  margin-top: -20px;
  justify-content: center;
  `

export const FormOutContainer = styled.div`
  display: flex;
  height: 100%;
  width:100%;
  flex-direction: column;
  line-height: 30px;
  align-items: flex-start;
  width: 300px;
`


export const FullNameContainer = styled.div`
  display: flex;
  width:100%;
  height: 100%;
  display: flex;
  
  margin-left: -10px;
  background-color: ${Theme.colors.white};  
  font-weight: 700;
  border-top: none;
  border-left:none;
  border-right:none;
  height: 20px;
  padding-left: 10px;
  padding-bottom: 10px;
  border-color:${Theme.colors.gray};
  margin-top: -20px;
  `

export const FullNameTitle = styled.h3`
  display: flex;
  width:100%;
  height: 100%;
  color: ${Theme.colors.gray_text};
  font-weight: 400;
  font-size: 9px;
`
export const FullnameInputContainer = styled.div`
  background-color: ${Theme.colors.white};  
  font-weight: 700;
  border-top: none;
  border-left:none;
  border-right:none;
  width: 100%;
  height: 30px;
  padding-left: 0px;
  margin-left:0px;
  
  border-color:${Theme.colors.gray};
`

export const TitleWelcome = styled.h2`
  color: ${Theme.colors.gray_text};
  font-weight: 400;
  font-size: 18px;
`

export const EmailContainer = styled.div`
  margin-top: 0px;
  display: flex;
  width:100%;
  height: 100%;
  `

export const TitleEmail = styled.h3`
  display: flex;
  width:100%;
  height: 100%;
  color: ${Theme.colors.gray_text};
  font-weight: 400;
  font-size: 9px;
  margin-top: 0px;
`

export const PasswordContainer = styled.div`
  display: flex;
  height: 100%;
  margin-left: 0px;
  margin-top: 0px;
  `

export const TitlePassword = styled.h3`
  background-color: ${Theme.colors.white};  
  font-weight: 400;
  font-size: 9px;
  color: ${Theme.colors.gray_text};
`

export const LoginInputContainer = styled.div`
  display: flex;
  width:100%;
  height: 100%;
`
export const LoginInput = styled.input`
  background-color: ${Theme.colors.white};  
  font-weight: 700;
  border-top: none;
  border-left:none;
  border-right:none;
  height: 30px;
  width:300px;
  margin-left:0px;
  padding-left: 20px;
  padding-bottom: 0px;
  border-color:${Theme.colors.gray};
`

export const PasswordInputContainer = styled.div`
  display: flex;
  width:100%;
  height: 100%;
`
export const PasswordInput = styled.input`
  background-color: ${Theme.colors.white};  
  font-weight: 700;
  border-top: none;
  border-left:none;
  border-right:none;
  width: 100%;
  height: 30px;
  padding-left: 20px;
  padding-bottom: 0px;
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
  margin-left: 170px;
  margin-top: 0px;
`

