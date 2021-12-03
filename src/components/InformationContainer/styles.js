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
  @media (max-width: 840px) {
      img, h4{
        width: 50%;
        height: 50%;      
      }
      h3{
        width: 50%;
        height: 50%;  
      }
      h4{
        margin-top: -180px;
      }
  }

  @media (max-width:${Theme.breakpoints.small}){
    display:none;
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