import styled from "styled-components";

import Theme from "../../common/styles/theme"

export const SignUpButton = styled.button`
  display: flex;
  width:50%;
  height: 100%;
  background: ${Theme.colors.gray_text};  
  color: ${Theme.colors.white};
  font-weight: 700;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  opacity: 1;
  border:none;
  margin-top: 20px;
  margin-left: 115px;
  width:120px;
  height: 30px;
`

export const SignUpButtonContainer = styled.button`
  display: flex;
  width:50%;
  height: 100%;
  border: none;
  background:${Theme.colors.white};
`