import React from 'react'
import {Footer} from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import styles from '../Home/Home.module.css';
import { FeedItem } from './FeedItem';



export const Home = () => {

    return (
        <div className={styles.home}>
        <Header/>
        <section  className={styles.section}>
        <React.Suspense fallback={<span>Carregando...</span>}>
            <FeedItem/>
        </React.Suspense>
        </section>
          <Footer/>
      </div>
    )
  }



