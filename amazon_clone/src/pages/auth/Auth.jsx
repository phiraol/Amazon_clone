import React from 'react'
import classes from './SingUp.module.css'
import LayOut from '../../components/LayOut/LayOut'
import image from '../../assets/amazonlogo.png'
import { Link } from 'react-router-dom';
function Auth() {
  return (
    <section className={classes.login}>
      <Link>
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG13.png"
          alt="amazon logo"
        />
      </Link>
      <div className={classes.login_container}>
        <h1>Sing In</h1>
        <form action="">
          <div>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button className={classes.login_signInbutton}>Sing In</button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className={classes.login_RegisterButton}> Create your Amazon Account</button>
      </div>
    </section>
  );
}

export default Auth
