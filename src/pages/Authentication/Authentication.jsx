
import { AuthenticatingUser } from '../../Services/AutenticationService.js';
import { useState } from 'react';
import { SaveToLocalStrg } from '../../Services/LocalStorageManagement.js';
import logo from '../../components/img/logo.svg';
import  styles from './StyleAuthentication.module.css';



export default function AuthenticationScreen() {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });




  const handleAsuthentication = async (username, password) => {
    try {
      if(username, password) {
      
    const response = await AuthenticatingUser(username, password);

    if (response && response !=='' && response !== null) {
      SaveToLocalStrg("@sessionID",response);
       window.location.replace( '/');
    } 
    else {
      
        alert('Usuário ou senha inválidos');
      
    }
  }else {
    alert('Preencha os campos de usuário e senha');
  }
    } catch (error) {
      alert('Usuário ou senha inválidos',error);
    }
  }

function handleChange(event) {
    const { name, value } = event.target
    console.log(name, value);
    setLoginData((prevState) => ({
    ...prevState,
    [name]: value,
    }));
}


  return (
    <div className={styles.container}>
      <img src={logo} className={styles.image} />
     
      <h1 className={styles.title}>Arte Se7em</h1>
      <form className={styles.form} onSubmit={(e) => {e.preventDefault(); handleAsuthentication(loginData.username, loginData.password)}}>
      <label htmlFor='username' className={styles.text}>Usuário:</label>
      <input name='username' type="text" placeholder="Username" value={loginData.username} className={styles.inputText} onChange={handleChange}/>
      <label htmlFor='password' className={styles.text}>Senha:</label>
      <input name='password' type="password" placeholder="Password" value={loginData.password} className={styles.inputText} onChange={handleChange}/>
      <button className={styles.button}>Entrar ✌️</button>
      </form>
    </div>
  );
}

