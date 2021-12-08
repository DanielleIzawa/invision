import { LinkContainer, LinkLog, LinkLogIn, SignUpContainer, TitleLogIn, TitleLogInContainer } from './styles'

const TermsAndPrivacy = () => {
  return (
    <>
    <SignUpContainer>
      <TitleLogInContainer>
        <TitleLogIn>
          Already on Invision?   
        </TitleLogIn>
      </TitleLogInContainer>
      <LinkContainer>
        <LinkLogIn >
        <LinkLog to = "/">Log in</LinkLog>
        </LinkLogIn>
      </LinkContainer>
      </SignUpContainer>
    </>  
  )
}

export default TermsAndPrivacy;