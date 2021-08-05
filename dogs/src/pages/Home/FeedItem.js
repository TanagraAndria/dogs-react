import React from 'react'
import styles from './FeedItem.css';
import { useEffect, useState } from 'react';




export const FeedItem = () => {
    const [dados, setDados] = useState([]);
  
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
           setDados(dados)
           console.log(json)
          })
      });
      

      
    return (
        <section className={styles.section}>
          Feed
          <div>{ dados.map((item)=>{ return(
            <div> <ul>{item.author}</ul></div>
          )})}</div>
          {dados.map (()=>{
            return(
              <div key={dados.id}>
                <li>{dados.author}</li>
              </div>
            )
          })}
          
          {/* Feed: { photo.map((photo) => { return (<li key={photo.id}>{photo.author}
           </li>)})} */}
     </section> 
    );
}

