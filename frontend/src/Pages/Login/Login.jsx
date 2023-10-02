import React from 'react';
import styles from './Login.module.css';
import Footer from '../../Components/Footer/Footer';
import image from '../../Assets/image1.png';

const Login = () => {
  return (
    <>
    <div className={styles.group}>
        <img className={styles.icon} src={image} alt="icon" />
        <p>Musicart</p>    
    </div>
    <div className={styles.container}>
        <h1>Sign in</h1>
        <label htmlFor="name">Enter your email or mobile number</label>
        <br />
        <input type="text" />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" />
        <br />
        <button>Continue</button>    
        <br />
        <small>By continuing, you agree to Musicart privacy notice and conditions of use.</small>
    </div>
    <span>
        <p>New to Musicart?</p>
    </span>
    <button className={styles.btn}>Create your Musicart account</button>
    <Footer />
    </>
  )
}

export default Login;