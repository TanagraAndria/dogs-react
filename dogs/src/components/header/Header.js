import React from 'react';
import styles from '../header/Header.module.css';
import logo from '../../img/logo.png';


export const Header = () => {
    return (
        <div  className={styles.header}>
            <nav className={styles.nav}>
                <img src={logo} alt="" className={styles.logo}/>
                <p>Social Dogs</p>
            </nav>
        </div>
    )
}
