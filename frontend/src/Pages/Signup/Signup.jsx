import React from 'react';
import Footer from '../../Components/Footer/Footer';
import styles from './Signup.module.css';
import image from '../../Assets/image1.png';

const Signup = () => {
  return ( 
    <>
    <div className={styles.group}>
        <img className={styles.icon} src={image} alt="icon" />
        <p>Musicart</p>    
    </div>
    <div className={styles.container}>
        <h1>CreateAccount</h1>
        <label htmlFor="name"> Your Name</label>
        <input type="text" />
        <label htmlFor="number"> Mobile number</label>
        <input type="number" />
        <label htmlFor="email"> Email Id</label>
        <input type="email" />
        <label htmlFor="password"> Password</label>
        <input type="password" />
        <p>By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Musicart. Message and data rates may apply.</p>
        <button>Continue</button>
        <small>By continuing, you agree to Musicart privacy notice and conditions of use.</small>
    </div>
    <p>Already have an account? <a className={styles.link} href="/SignIn">Sign in</a></p>
    <Footer />
    </> 
  )
}

export default Signup;