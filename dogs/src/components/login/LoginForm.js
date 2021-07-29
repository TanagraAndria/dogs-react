import React from 'react'
import {Link} from 'react-router-dom';
import { Button } from '../button/Button';
import styles from './LoginForm.module.css';

export const LoginForm = () => {
    const [username, setUsername] = React.useState('');
     const [password, setPassword] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
      });
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
          <label className={styles.label}>Nome</label>
        <input className={styles.input}
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <label className={styles.label}>Senha</label>
        <input className={styles.input}
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <Button><Link to="/home">Entrar</Link></Button>
      </form>
      <Button><Link to="/register">Cadastro</Link></Button>
    </section>
)
}
