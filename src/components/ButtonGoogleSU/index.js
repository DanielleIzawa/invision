/* import google from '../../common/assets/png/google.png'
import { GoogleButton, GoogleButtonContainer } from './styles'

const Google = () => {
  return (
    <GoogleButtonContainer>
      <GoogleButton> 
        <img src = {google} alt = "" className = "google" />
        Sign up with Google
      </GoogleButton>
    </GoogleButtonContainer>
  )
}

export default Google; */

import GoogleLogin from 'react-google-login'
import { GoogleButtonContainer } from './styles'

function App() {
  const handleFailure = (result) => {
    alert(result);
  }
  const handleLogin = (googleData) => {
    console.log(googleData);
  }
  return (
    <GoogleButtonContainer>
      <GoogleLogin
      clientId="925000514868-bpcps09l04mgqm3l25nnb6va5a8vpvsv.apps.googleusercontent.com"
      buttonText="Sign up with Google"
      onSuccess={handleLogin}
      onFailure={handleFailure}
      cookiePolicy={'single_host_origin'}
      >  
      </GoogleLogin>
    </GoogleButtonContainer>
  )
}

export default App;