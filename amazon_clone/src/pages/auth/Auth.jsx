import React, { useContext, useState } from 'react'
import classes from './SingUp.module.css'
import LayOut from '../../components/LayOut/LayOut'
import image from '../../assets/amazonlogo.png'
import { Link } from 'react-router-dom';
import { auth } from "../../utility/firebase"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { DataContext } from '../../components/dataProvider/DataProvider';
import { Type } from '../../utility/action.type';
function Auth() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [{ user }, dispatch] = useContext(DataContext);
console.log(user)
  const authHandler = async(e) => {
    e.preventDefault();
    console.log(e.target.name)
    if (e.target.name == "SingIn") {
      signInWithEmailAndPassword(auth, email, password).then((userInfo) => {
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user
        })
      }).catch((err) => {
        console.log(err)
      });
    } else {
      createUserWithEmailAndPassword(auth, email, password).then((userInfo) => {
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
      }).catch((err) => {
        console.log(err)
      });
    }
  }
  // console.log(email, password)
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
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            name="SingIn"
            type="submit"
            onClick={authHandler}
            className={classes.login_signInbutton}
          >
            Sing In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button
          type="submit"
          name="SingUp"
          onClick={authHandler}
          className={classes.login_RegisterButton}
        >
          {" "}
          Create your Amazon Account
        </button>
      </div>
    </section>
  );
}

export default Auth
