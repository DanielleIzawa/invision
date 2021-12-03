import Information from './../../components/InformationContainer';
import { Container } from './styles';

const Main = ({children}) => {
  return (
    <Container> 
      <Information />
      {children}
    </Container>
    
  )
}

export default Main;