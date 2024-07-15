import React, { useState } from "react";
import Header from "../../components/generalComponents/header/Header";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.js";
import { useNavigate } from "react-router";
import styles from "./Login.module.scss";
import Footer from "../../components/generalComponents/footer/Footer.jsx";
const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/");
  };
  return (
    <div>
      <Header></Header>
      <div className={styles["login-form-container"]}>
        <h1>Login</h1>
        <form action="">
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <div className={styles["login-button-container"]}>
            <button onClick={(e) => handleClick(e)}>Log in</button>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default LogIn;
