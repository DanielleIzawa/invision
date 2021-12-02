import styled from "styled-components";

import Theme from "../../common/styles/theme"

export const GoogleButton = styled.button`
  display: flex;
  width:50%;
  height: 100%;
  background: ${Theme.colors.white};  
  color: ${Theme.colors.black};
  font-weight: 700;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 12px;
  opacity: 1;
  box-shadow: 0px 3px 6px ${Theme.colors.light_gray};
  border:none;
  height: 30px;
  width: 180px;
  > img {
    width: 20px;
    height: 20px;
  }
  `

export const GoogleButtonContainer = styled.div`
  margin-top: 20px;  
  display: flex;
  width:50%;
  height: 100%;
  margin-left: 200px;
  
`