import {Route, Switch} from "react-router-dom"
import Main from "../pages/home"
import routes from './routes';
import SigIn from './../pages/signIn/index';
import SignUp from './../pages/signUp/index';


const Routes = () => {
  return (
    <Main>
      <Switch>
        <Route path={routes.signIn} exact component={SigIn}/>
        <Route path={routes.signUp} exact component={SignUp}/>
      </Switch> 
    </Main>
  )
}

export default Routes;