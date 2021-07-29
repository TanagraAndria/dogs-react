import React from 'react';
import styles from '../header/Header.module.css';
import logo from '../../img/logo.png';
import {Link} from 'react-router-dom';


export const Header = () => {
    return (
        <div  className={styles.header}>
            <nav className={styles.nav}>
                <Link to="/"><img src={logo} alt="" className={styles.logo}/></Link>
                
                <p>Social Dogs</p>
            </nav>
        </div>
    )
}
