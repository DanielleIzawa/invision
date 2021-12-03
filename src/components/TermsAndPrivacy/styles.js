import { Link } from 'react-router-dom'
import styled from "styled-components";

import Theme from "../../common/styles/theme"

export const LinkTermsContainer = styled(Link)`
 color:${Theme.colors.green_text};
`

export const LinkTerms = styled.div`
  display: flex;
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
  gap: 4px;
  margin-top: -10px;

  `

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
`

export const TitleTerms = styled.h3`
  display: flex;
  color: ${Theme.colors.gray_text};
  font-weight: 400;
  font-size: 9px;
  margin-top: 15px;
  margin-left:-10px;
`

export const TitleTermsContainer = styled.div`
  display: flex;
`

export const AndColor = styled.div`
  color: ${Theme.colors.gray_text};
`
