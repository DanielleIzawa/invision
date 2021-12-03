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
/*   @font-face {
    font-family: 'Avenir';
    src: url('../../common/font/Avenir Heavy.ttf') format(truetype);
    font-weight: normal;
    font-style: normal;
  } */
  display: flex;
  width:80%;
  margin-top: 50px;
  justify-content: flex-end;
  //font-family: 'Avenir';
  `
export const Title = styled.h1`
  color: ${Theme.colors.black};  
  font-weight: 700;
  font-size: 22px;
`

export const TitleWelcomeContainer = styled.div`
  display: flex;
  width:100%;
  justify-content: center;
  margin-top: 50px;
  `
export const TitleWelcome = styled.h2`
  color: ${Theme.colors.gray_text};
  font-weight: 400;
  font-size: 18px;
  margin-top: 0px;
  height:100%;
`

export const FormContainer = styled.div`
  display: flex;
  height: 100%;
  width:100%;
  flex-direction: column;
  line-height: 30px;
  align-items: flex-start;
  width: 300px;
  margin-top: 30px;
`

export const EmailContainer = styled.div`
  display: flex;
  height: 100%;
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
  `

export const TitleForgotPasswordContainer = styled.div`
  margin-top: 0px;
  display: flex;
  width:100%;
  height: 100%;
`

export const TitlePassword = styled.h3`
  background-color: ${Theme.colors.white};  
  font-weight: 400;
  font-size: 9px;
  color: ${Theme.colors.gray_text};
  width: 50px;
  height: 20px;
`

export const TitleForgotPassword = styled.h3`
  display: flex;
  width:100%;
  width: 300px;
  height: 100%;
  color: ${Theme.colors.gray_text};
  font-weight: 400;
  font-size: 9px;
  margin-left: 225px;
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
  width: 100%;
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

export const LineContainer1 = styled.input`
  display: flex;
  border-top: none;
  border-left:none;
  border-right:none;
  width: 130px;
  border-color:${Theme.colors.gray};
  margin-top: 35px;
  margin-right:120px;
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
  margin-right:-200px;
  border-width:1px;
`
export const TitleOr = styled.h3`
  display: flex;
  color: ${Theme.colors.gray_text};
  font-size: 9px;
  margin-left: 40px;
  margin-top: -15px;

`
export const ResponsiveContainer = styled.div`
  display: flex;
  height: 100%;
  width:100%;
  flex-direction: column;
  line-height: 30px;
  align-items: center;
`
