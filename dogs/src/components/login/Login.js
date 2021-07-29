import React from 'react';
import { Switch, Route, useHistory  } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { UserContext } from '../../UserContext';
import styles from './login.module.css';


const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <useHistory  to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Switch>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
        </Switch>
      </div>
    </section>
  );
};

export default Login;
