import styled from "styled-components";

import Theme from "../../common/styles/theme"

export const SignInButton = styled.button`
  display: flex;
  width:50%;
  background: ${Theme.colors.gray_text};  
  color: ${Theme.colors.white};
  font-weight: 700;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  opacity: 1;
  border:none;
  height: 30px;
  width:120px;
  `

export const SignInButtonContainer = styled.div`
  margin-top: 10px;
  margin-left: 90px;
  border:none;
`
