import { Container } from './styles';
import Information from './../../components/InformationContainer';


const Main = ({children}) => {
  return (
    <Container> 
      <Information />
      {children}
    </Container>
    
  )
}

export default Main;