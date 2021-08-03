import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import { BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
// import {isAuthenticated} from './auth';
import {Login} from './pages/Login/Login';
import {Home} from './pages/Home/Home';
import { LoginForm } from './components/login/LoginForm';
import {Register} from './pages/Register/Register'
// const privateRoute = ({component: Component, ...rest})=>(
//   <Route {...rest} render={props =>(isAuthenticated()?
//     (<Component{...props}/>) : (<Redirect to ={{pathname:'/', state:{from: props.location}}}/>))}
//     />
// );

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path='/' component={Login} exact />
    <Route path='/form' component={LoginForm} exact />
    <Route path='/home' component={Home} exact />
    <Route path='/register' component={Register}/>
    {/* <privateRoute path='/home' component={Home} /> */}
    <Route component={() => <div className="error"> Page 404 </div>}/>
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);




