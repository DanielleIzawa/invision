import google from '../../common/assets/png/google.png'
import { GoogleButton, GoogleButtonContainer } from './styles'

const Google = () => {
  return (
    <GoogleButtonContainer>
      <GoogleButton> 
        <img src={google} alt="" className="google" />
        Sign in with Google
      </GoogleButton>
    </GoogleButtonContainer>
  )
}

export default Google;