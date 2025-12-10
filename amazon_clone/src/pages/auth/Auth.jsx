import React, { useContext, useState } from 'react'
import classes from './SingUp.module.css'
// import LayOut from '../../components/LayOut/LayOut'
import image from '../../assets/amazonlogo.png'
import { Link, useNavigate} from 'react-router-dom';
import { auth } from "../../utility/firebase"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { DataContext } from '../../components/dataProvider/DataProvider';
import { Type } from '../../utility/action.type';
import { ClipLoader } from "react-spinners";
function Auth() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [{ user }, dispatch] = useContext(DataContext);
  const [loading, setLoading] = useState({
    signUp: false,
    signIn: false,
  })
  const navigate = useNavigate()
console.log(user)
  const authHandler = async(e) => {
    e.preventDefault();
    if (e.target.name == "SingIn") {
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password).then((userInfo) => {
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user
        })
        setLoading({ ...loading, signIn: false });
        navigate("/")
      }).catch((err) => {
        setError(err.message);
        setLoading({ ...loading, signIn: false });
      });
    } else {
      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password).then((userInfo) => {
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
        setLoading({ ...loading, signUp: false });
        navigate("/");
      }).catch((err) => {
        setError(err.message)
        setLoading({ ...loading, signUp: false });
      });
    }
  }
  // console.log(email, password)
  return (
    <section className={classes.login}>
      <Link to={"/"}>
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
            {loading.signIn ? (
              <ClipLoader color="#000" size={10}></ClipLoader>
            ) : (
              "  Sing In"
            )}
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
          {loading.signUp ? (
            <ClipLoader color="#000" size={10}></ClipLoader>
          ) : (
            "Create your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error} </small>
        )}
      </div>
    </section>
  );
}

export default Auth
