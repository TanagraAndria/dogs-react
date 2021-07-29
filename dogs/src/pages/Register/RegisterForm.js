import React from 'react'
import { Button } from '../../components/button/Button';
import styles from '../../components/login/LoginForm.module.css';


export const RegisterForm = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');

    function handleSubmit(event) {
        event.preventDefault();
        fetch('https://dogsapi.origamid.dev/json/api/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password, email }),
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
        <div>
            <h1>Cadastre-se</h1>
            <form action="" onSubmit={handleSubmit}>
                <label className={styles.label}>Nome</label>
                <input className={styles.input}
                type="text"
                value={username}
                onChange={({ target }) => setUsername(target.value)}
                />
                <label className={styles.label}>E-mail</label>
                <input className={styles.input}
                type="text"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                />
                <label className={styles.label}>Senha</label>
                <input className={styles.input}
                type="password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                />
                <Button>Cadastrar</Button>
            </form>

        </div>
    )
}
