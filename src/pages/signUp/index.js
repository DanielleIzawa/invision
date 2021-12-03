import GoogleButton from '../../components/ButtonGoogle'
import SignUpButton from '../../components/ButtonSignUp'
import TitleLogIn from '../../components/LogIn'
import TitleTerms from '../../components/TermsAndPrivacy'
import { EmailContainer, FormOutContainer, FullNameContainer, FullnameInputContainer, FullNameTitle, GettingStartedContainer, LineContainer1, LineContainer2, LoginContainer, LoginInput, LoginInputContainer, PasswordContainer, PasswordInput, PasswordInputContainer, ResponsiveContainer, Title, TitleContainer, TitleEmail, TitleOr, TitlePassword, TitleWelcome } from './styles';

const SignUp = () => {
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
                  <LoginInput type="text" required/>
                </FullnameInputContainer>
    
                <EmailContainer>
                  <TitleEmail >Users name or Email</TitleEmail>
                </EmailContainer>
    
                <LoginInputContainer>
                  <LoginInput type="email" required/>
                </LoginInputContainer>
    
                <PasswordContainer>
                  <TitlePassword >Password</TitlePassword>
                </PasswordContainer>
    
                <PasswordInputContainer>
                  <PasswordInput type="password" minlength={6} required />
                </PasswordInputContainer>
            <SignUpButton />
              </FormOutContainer>
            </form>

            <ResponsiveContainer>   
            <LineContainer1 />
              <TitleOr>
                 Or
              </TitleOr>
            <LineContainer2 />
            <GoogleButton />
    
            <TitleTerms />
    
            <TitleLogIn />
            </ResponsiveContainer>
    
          </LoginContainer>
  )
}

export default SignUp;