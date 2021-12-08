import routes from './../../routes/routes';
import { LinkAccount, LinkContainer, LinkCreate, TitleNewInvision, TitleNewInvisionContainer } from './styles'

const LinkCreateAccount = () => {
  return (
    <>
    <TitleNewInvisionContainer>
      <TitleNewInvision>
        New Invision?   
      </TitleNewInvision>
    </TitleNewInvisionContainer>
    <LinkContainer>
      <LinkAccount>
        <LinkCreate to = {routes.signUp}>Create Account</LinkCreate>
      </LinkAccount>
    </LinkContainer>
    </>  
  )
}

export default LinkCreateAccount;