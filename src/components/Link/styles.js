import { Link } from 'react-router-dom';
import styled from "styled-components";

import Theme from "../../common/styles/theme"

export const LinkAccount = styled.div`
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
  margin-left: 45px;
  margin-top: -30px;
`

export const LinkContainer = styled.div`
  display: flex;
`

export const TitleNewInvision = styled.h3`
  display: flex;
  width:100%;
  color: ${Theme.colors.gray_text};
  font-weight: 400;
  font-size: 9px;
`

export const TitleNewInvisionContainer = styled.div`
  display: flex;
  align-items:center;
  margin-left: -90px;
  margin-top:20px;

`
export const LinkCreate = styled(Link)`
  color:${Theme.colors.green_text};
`
