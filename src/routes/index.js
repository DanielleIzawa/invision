import {Route, Switch} from "react-router-dom"
import Main from "../pages/home"
import routes from './routes';
import SigIn from './../pages/signIn/index';
import SignOut from './../pages/SignOut/index'


const Routes = () => {
  return (
    <Main>
      <Switch>
        <Route path={routes.signIn} exact component={SigIn}/>
        <Route path={routes.SignOut} exact component={SignOut}/>
      </Switch> 
    </Main>
  )
}

export default Routes;