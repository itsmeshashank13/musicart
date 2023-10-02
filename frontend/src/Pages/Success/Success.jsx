import React from 'react';
import styles from './Success.module.css';
import Footer from '../../Components/Footer/Footer';
import image from '../../Assets/image1.png';
import image2 from '../../Assets/confetti.png';

const Success = () => {
  return (
    <>
    <div className={styles.group}>
        <img className={styles.icon} src={image} alt="icon" />
        <p>Musicart</p>    
    </div>
    <div className={styles.container}>
      <img src={image2} alt="success" />
      <h3>Order is placed successfully!</h3>
      <h4>You will be receiving a confirmation email with the order details</h4>
      <a href='/'>
        <button className={styles.btn}>Go back to Home page</button> 
      </a>
    </div>
    <Footer />
    </>
  )
}

export default Success;