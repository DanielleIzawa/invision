import { Link } from "react-router-dom"
import styled from "styled-components";

import Theme from "../../common/styles/theme"

export const SignUpContainer = styled.div`
  display:flex
`
export const LinkLog = styled(Link)`
  color:${Theme.colors.green_text};

`

export const LinkLogIn = styled.div`
  display: flex;
  background: ${Theme.colors.white};  
  color: ${Theme.colors.green_text};
  font-weight: 700;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  opacity: 1;
  border:none;
  margin-top: 0px;
  margin-left: -10px;

  `

export const LinkContainer = styled.div`
  display: flex;  
`

export const TitleLogIn = styled.h3`
  display: flex;
  color: ${Theme.colors.gray_text};
  font-weight: 400;
  font-size: 9px;
`

export const TitleLogInContainer = styled.div`
  display: flex;
  width: 100px;
  
`


