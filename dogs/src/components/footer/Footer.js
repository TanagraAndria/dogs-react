import React from 'react';
import styles from './Footer.module.css';
import git from '../../img/git.png'


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={git} alt="" className={styles.git} />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  );
};

export default Footer;









// import React from 'react'
// import styles from '../footer/Footer.module.css'
// import git from '../../img/git.png'

// export const Footer = () => {
//     return (
//         <div className={styles.footer}>
//           <img src={git} alt="" className={styles.git} />
//           <a  className={styles.a}href="https://github.com/TanagraAndria"> Tânagra Andria</a> 
//         </div>
//     )
// }
