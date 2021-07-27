import React from 'react'
import styles from '../footer/Footer.module.css'
import git from '../../img/git.png'

export const Footer = () => {
    return (
        <div className={styles.footer}>
          <img src={git} alt="" className={styles.git} />
          <a href="https://github.com/TanagraAndria"> Tânagra Andria</a> 
        </div>
    )
}
