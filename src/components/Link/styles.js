import styled from "styled-components";

import Theme from "../../common/styles/theme"

export const Link = styled.div`
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
  width:100px;
  height: 20px;
  margin-left:93px;
  margin-top: -39px;

`

export const LinkContainer = styled.div`
  display: flex;
  width:25%;
  height: 100%;
`

export const TitleNewInvision = styled.h3`
  display: flex;
  width:50%;
  height: 100%;
  color: ${Theme.colors.gray_text};
  font-weight: 400;
  font-size: 9px;
  margin-top: 0px;
  width:300px;
  height: 20px;
`

export const TitleNewInvisionContainer = styled.div`
  display: flex;
  width:50%;
  height: 100%;
  margin-left: 240px;
`
