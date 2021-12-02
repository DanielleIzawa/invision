import GoogleButton from '../../components/ButtonGoogle'
import SignInButton from '../../components/ButtonSignIn'
import Link from '../../components/Link'
import { LoginContainer,
         LoginInput,
         PasswordInput,
         Title,
         TitleEmail,
         FullnameInputContainer,
         FullNameTitle,
         FullNameContainer,
         LoginInputContainer,
         PasswordInputContainer,
         TitleOrContainer,
         TitleForgotPasswordContainer,
         TitleForgotPassword,
         PasswordContainer,
         EmailContainer,
         TitleWelcomeContainer,
         TitleContainer,
         TitleOr,
         TitlePassword,
         TitleWelcome } from './styles';

const SigOut = () => {
  return(
      <LoginContainer>
        <TitleContainer>
          <Title> Invision </Title>
        </TitleContainer>

        <TitleWelcomeContainer>
          <TitleWelcome> Getting Started </TitleWelcome> 
        </TitleWelcomeContainer>

        <FullNameContainer>
          <FullNameTitle>Full name</FullNameTitle>
        </FullNameContainer>

        <FullnameInputContainer>
          <LoginInput />
        </FullnameInputContainer>

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

export default SigOut;