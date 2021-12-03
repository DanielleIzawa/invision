import GoogleButton from '../../components/ButtonGoogle'
import SignInButton from '../../components/ButtonSignIn'
import LinkAccount from '../../components/Link'
import { EmailContainer, FormContainer, LineContainer1, LineContainer2, LoginContainer, LoginInput, LoginInputContainer, PasswordContainer, PasswordInput, PasswordInputContainer, ResponsiveContainer, Title, TitleContainer, TitleEmail, TitleForgotPassword, TitleForgotPasswordContainer, TitleOr, TitlePassword, TitlesContainer, TitleWelcome, TitleWelcomeContainer } from './styles';

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
            <LoginInput type="email" required/>
          </LoginInputContainer>
    
          <PasswordContainer>
            <TitlePassword>Password</TitlePassword>
          </PasswordContainer>
          
          <PasswordInputContainer>
            <PasswordInput type="password" required/>
          </PasswordInputContainer>
    
          <TitleForgotPasswordContainer>
            <TitleForgotPassword>Forgot password?</TitleForgotPassword>
          </TitleForgotPasswordContainer>
        <SignInButton />
        </FormContainer>
      </form>

      <ResponsiveContainer>
        <LineContainer1 />
          <TitleOr>
             Or
          </TitleOr>
          <LineContainer2 />

        <GoogleButton />

        <LinkAccount />
      </ResponsiveContainer>

        
      </LoginContainer>
  )
}

export default SigIn;