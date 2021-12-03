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
  width:100%;
  justify-content: center;
  margin-top: 50px;
  
  `

export const FormOutContainer = styled.div`
  display: flex;
  height: 100%;
  width:100%;
  flex-direction: column;
  line-height: 30px;
  align-items: flex-start;
  width: 300px;
  margin-top:60px;

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
  margin-top: -50px;

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
  margin-top: -10px;
  height:100%;
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
  margin-top: 5px;
  
`

export const PasswordContainer = styled.div`
  display: flex;
  height: 100%;
  margin-left: 0px;
  margin-top: -17px;

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
  width: 100%;
  height: 30px;
  padding-left: 20px;
  margin-top:-10px;

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
  margin-top: -10px;;
  border-color:${Theme.colors.gray};
  
`
export const LineContainer1 = styled.input`
  display: flex;
  border-top: none;
  border-left:none;
  border-right:none;
  width: 130px;
  border-color:${Theme.colors.gray};
  margin-top: 70px;
  margin-right:150px;
  border-width:1px;
  
`
export const LineContainer2 = styled.input`
  display: flex;
  width:40%;
  border-top: none;
  border-left:none;
  border-right:none;
  width: 130px;
  border-color:${Theme.colors.gray};
  margin-top: -30px;
  margin-right:-175px;
  border-width:1px;
  
`
export const TitleOr = styled.h3`
  display: flex;
  color: ${Theme.colors.gray_text};
  font-size: 9px;
  margin-left: 15px;
  margin-top: -13px;

`

export const ResponsiveContainer = styled.div`
  display: flex;
  height: 100%;
  width:100%;
  flex-direction: column;
  line-height: 30px;
  align-items: center;
`
