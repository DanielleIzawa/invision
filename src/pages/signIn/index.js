import GoogleButton from '../../components/ButtonGoogle'
import SignInButton from '../../components/ButtonSignIn'
import LinkAccount from '../../components/Link'
import { EmailContainer, FormContainer, LoginContainer, LoginInput, LoginInputContainer, PasswordContainer, PasswordInput, PasswordInputContainer, Title, TitleContainer, TitleEmail, TitleForgotPassword, TitleForgotPasswordContainer, TitleOr, TitleOrContainer, TitlePassword, TitleWelcome, TitleWelcomeContainer } from './styles';

const SigIn = () => {
  return(
      <LoginContainer>
        <TitleContainer>
          <Title> Invision </Title>
        </TitleContainer>

        <TitleWelcomeContainer>
          <TitleWelcome> Welcome to Invision </TitleWelcome> 
        </TitleWelcomeContainer>

      <form>
        <FormContainer>
          <EmailContainer>
            <TitleEmail>Users name or Email</TitleEmail>
          </EmailContainer>
    
          <LoginInputContainer>
            <LoginInput type="email"/>
          </LoginInputContainer>
    
          <PasswordContainer>
            <TitlePassword>Password</TitlePassword>
          </PasswordContainer>
          
          <PasswordInputContainer>
            <PasswordInput type="password"/>
          </PasswordInputContainer>
    
          <TitleForgotPasswordContainer>
            <TitleForgotPassword>Forgot password?</TitleForgotPassword>
          </TitleForgotPasswordContainer>
        </FormContainer>
      </form>

        <SignInButton />
        <TitleOrContainer>
          <TitleOr>
            {/* <hr width="40%" /> */}
            Or
          </TitleOr>
        </TitleOrContainer>

        <GoogleButton />

        <LinkAccount />
      </LoginContainer>
  )
}

export default SigIn;