import { Link } from 'react-router-dom'
import styled from "styled-components";

import Theme from "../../common/styles/theme"

export const LinkTermsContainer = styled(Link)`
 color:${Theme.colors.green_text};
`

export const LinkTerms = styled.div`
  display: flex;
  width:25%;
  height: 100%;
  background: ${Theme.colors.white};  
  color: ${Theme.colors.green_text};
  font-weight: 700;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  opacity: 1;
  border:none;
  width:200px;
  height: 25px;
  margin-left:245px;
  margin-top: -75px;
  gap: 10px;
  `

export const LinkContainer = styled.div`
  display: flex;
  width:100%;
  height: 100%;
`

export const TitleTerms = styled.h3`
  display: flex;
  width:50%;
  height: 100%;
  color: ${Theme.colors.gray_text};
  font-weight: 400;
  font-size: 9px;
  margin-top: -25px;
  margin-left:-20px;
  width:300px;
  height: 20px;
`

export const TitleTermsContainer = styled.div`
  display: flex;
  width:50%;
  height: 100%;
  margin-left: 240px;
`

export const AndColor = styled.div`
  color: ${Theme.colors.gray_text};
`
