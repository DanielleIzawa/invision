import styled from "styled-components";

import Theme from "../../common/styles/theme"


export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${Theme.colors.green_text};
  width:50%;
  height: 100%;
  color: ${Theme.colors.white}; 
  font-size: 700; 
  align-items: center;
  justify-content: center;
  > img {
    width: 450px;
    height: 450px;
    margin-top: 60px;
  }
`

export const TitleLeft = styled.h3`
  display: flex;
  color: ${Theme.colors.white};  
  font-weight: 400;
  margin-top: 25px;
  margin-bottom: 20px;
`

export const InformationTitle = styled.h4`
  display: flex;
  width:60%;
  height: 100%;
  color: ${Theme.colors.white};  
  font-weight: 400;
  > p{
    text-align: center;
  }
`