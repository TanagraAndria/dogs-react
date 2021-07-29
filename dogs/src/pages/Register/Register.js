import React from 'react'
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import styles from '../Login/login.module.css';
import dogs from '../../img/dogs.jpg';
import {RegisterForm} from './RegisterForm';

export const Register = () => {
    return (
        <div className={styles.login}>
        <Header/>
          <section className={styles.section}>
           <img src={dogs} alt="" className={styles.foto} />
           <RegisterForm/>
           </section> 
          <Footer/>
      </div>
    )
}
