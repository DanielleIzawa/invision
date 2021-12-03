import { Link } from "react-router-dom"
import styled from "styled-components";

import Theme from "../../common/styles/theme"

export const SignUpContainer = styled.div`
  margin-top: -20px;
`
export const LinkLog = styled(Link)`
color:${Theme.colors.green_text};
  margin-left:-30px;
`

export const LinkLogIn = styled.div`
  display: flex;
  width:25%;
  height: 100%;
  background: ${Theme.colors.white};  
  color: ${Theme.colors.green_text};
  font-weight: 700;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  opacity: 1;
  border:none;
  width:30px;
  height: 20px;
  margin-top: -45px;
  `

export const LinkContainer = styled.div`
  display: flex;
  margin-left:100px;
  margin-top: -40px;
`

export const TitleLogIn = styled.h3`
  display: flex;
  width:50%;
  height: 100%;
  color: ${Theme.colors.gray_text};
  font-weight: 400;
  font-size: 9px;
  margin-top: -40px;
  width:300px;
  height: 20px;
`

export const TitleLogInContainer = styled.div`
  display: flex;
  width:50%;
  height: 100%;
  width: 100px;
  height: 50px;
  margin-left: 0px;
  margin-top: -50px;
`


