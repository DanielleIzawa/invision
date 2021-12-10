import data from '../../common/assets/png/Data.png'
import { InformationContainer, InformationTitle, TitleLeft } from "./styles";

const Information = () => {
  return (
    <InformationContainer>
    <img src = {data} alt = "" className = "data" />
    <TitleLeft>Marcenas mattis egestas</TitleLeft>
    <InformationTitle> <p> Erdum et malesuada fames ac ante ileum primmer in 
    faucibus uspendisse porta. </p></InformationTitle>
    </InformationContainer>
    )
  }
  
  export default Information;
