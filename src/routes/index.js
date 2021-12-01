import {Route, Switch} from "react-router-dom"
import Main from "../pages/home"
import routes from './routes';
import SigIn from './../pages/signIn/index';

const Routes = () => {
  return (
    <Main>
      <Switch>
        <Route path={routes.signIn} exact component={SigIn}/>
      </Switch> 
    </Main>
  )
}

export default Routes;