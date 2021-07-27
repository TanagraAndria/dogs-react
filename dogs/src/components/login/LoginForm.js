import React from 'react'
import {Link} from 'react-router-dom';

export const LoginForm = () => {
    const [username, setUsername]= React.useState('');
    const [password, setPassword]= React.useState('');

    function handleSubmit(event) {
         event.preventDefault();
        fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
            method: 'POST',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'accept': 'application/json'
            },
            body: JSON.stringify({username, password})
        })
            .then((response) => response.json())
            .then((json) => {
            console.log(json);
            setUsername('');
            setPassword('');
            })
    }
    
    return (
        <section>
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" 
                value={username}
                onChange={({target}) => setUsername(target.value)} />

                <input type="text" 
                value={password}
                onChange={({target}) => setPassword(target.value)} />

                <button>Entrar</button>
            </form>
          
            <p><Link to="/create" >Cadastre-se! </Link></p>
        </section>
    )
}
