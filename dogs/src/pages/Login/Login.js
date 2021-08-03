import React from 'react';

import {LoginForm} from '../../components/login/LoginForm';
import {Footer} from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import foto from '../../img/foto.jpg';
import styles from '../Login/login.module.css';

export const Login = () => {
    return (
        <div className={styles.login}>
        <Header/>
          <section className={styles.section}>
           <img src={foto} alt="" className={styles.foto} />
           <LoginForm/>
           </section> 
          <Footer/>
      </div>
    )
}
