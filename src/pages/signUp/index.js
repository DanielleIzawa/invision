import GoogleButton from '../../components/ButtonGoogle'
import SignUpButton from '../../components/ButtonSignUp'
import TitleLogIn from '../../components/LogIn'
import TitleTerms from '../../components/TermsAndPrivacy'
import { EmailContainer, FormOutContainer, FullNameContainer, FullnameInputContainer, FullNameTitle, GettingStartedContainer, LoginContainer, LoginInput, LoginInputContainer, PasswordContainer, PasswordInput, PasswordInputContainer, Title, TitleContainer, TitleEmail, TitleOr, TitleOrContainer, TitlePassword, TitleWelcome } from './styles';

const SigUp = () => {
  return(
    <LoginContainer>
          <TitleContainer>
            <Title> Invision </Title>
          </TitleContainer>

          <GettingStartedContainer>
            <TitleWelcome> Getting Started </TitleWelcome> 
          </GettingStartedContainer>

            <form> 
              <FormOutContainer>
                <FullNameContainer>
                  <FullNameTitle>Full name</FullNameTitle>
                </FullNameContainer>
    
                <FullnameInputContainer>
                  <LoginInput />
                </FullnameInputContainer>
    
                <EmailContainer>
                  <TitleEmail type="text">Users name or Email</TitleEmail>
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
              </FormOutContainer>
            </form>

            <SignUpButton />
          <TitleOrContainer>
            <TitleOr>Or </TitleOr>
          </TitleOrContainer>

          <GoogleButton />

          <TitleTerms />

          <TitleLogIn />

          </LoginContainer>
  )
}

export default SigUp;