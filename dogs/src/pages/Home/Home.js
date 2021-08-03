import React from 'react'
import {Footer} from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import styles from '../Home/Home.module.css';
import { useEffect, useState } from 'react';


export const Home = () => {
    const [photo, setPhoto] = useState([]);
    useEffect(() => {
        fetch(`https://dogsapi.origamid.dev/json/api/photo`, {
          method: 'GET',
          headers: {
            "accept": "application/json",
          },
          options: {
            method: 'GET',
            cache: 'no-store',
          }
    
        })
    
          .then((response) => response.json())
          .then((json) => {
           setPhoto(photo)
           console.log(json)
          })
    
      })
    
    
    return (
        <div className={styles.home}>
        <Header/>
          <section className={styles.section}>
              <div key={photo}>
                  <div>{photo.author}</div>
              </div>
          {/* <div key={menuItems.id}>
                    <div className="Allday">
                      <div className='nameProducts'>
                        <ul>{menuItems.name}</ul>
                      </div>
            </div> */}
           </section> 
          <Footer/>
      </div>
    )
}
