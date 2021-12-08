import { AndColor, LinkContainer, LinkTerms, LinkTermsContainer, TitleTerms, TitleTermsContainer } from './styles'

const LinkCreateAccount = () => {
  return (
    <>
    <TitleTermsContainer>
      <TitleTerms>
        By signing up, you agree to Invision   
      </TitleTerms>
    </TitleTermsContainer>
    <LinkContainer>
      <LinkTerms>
      <LinkTermsContainer to = ""> Terms of Conditions </LinkTermsContainer>
        <AndColor> and </AndColor>
      <LinkTermsContainer to = ""> Privacy Policy </LinkTermsContainer>
      </LinkTerms>
    </LinkContainer>
    </>  
  )
}

export default LinkCreateAccount;