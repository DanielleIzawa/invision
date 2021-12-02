import GoogleButton from '../../components/ButtonGoogle'
import SignInButton from '../../components/ButtonSignIn'
import Link from '../../components/Link'
import { LoginContainer, LoginInput, PasswordInput, Title, TitleEmail, LoginInputContainer, PasswordInputContainer, TitleOrContainer, TitleForgotPasswordContainer, TitleForgotPassword, PasswordContainer, EmailContainer, TitleWelcomeContainer, TitleContainer, TitleOr, TitlePassword, TitleWelcome } from './styles';

const SigIn = () => {
  return(
      <LoginContainer>
        <TitleContainer>
          <Title> Invision </Title>
        </TitleContainer>

        <TitleWelcomeContainer>
          <TitleWelcome> Welcome to Invision </TitleWelcome> 
        </TitleWelcomeContainer>

        <EmailContainer>
          <TitleEmail>Users name or Email</TitleEmail>
        </EmailContainer>

        <LoginInputContainer>
          <LoginInput />
        </LoginInputContainer>

        <PasswordContainer>
          <TitlePassword>Password</TitlePassword>
        </PasswordContainer>
        
        <PasswordInputContainer>
          <PasswordInput />
        </PasswordInputContainer>

        <TitleForgotPasswordContainer>
          <TitleForgotPassword>Forgot password?</TitleForgotPassword>
        </TitleForgotPasswordContainer>

        <SignInButton />
        <TitleOrContainer>
          <TitleOr>Or</TitleOr>
        </TitleOrContainer>

        <GoogleButton />

        <Link />
      </LoginContainer>
  )
}

export default SigIn;