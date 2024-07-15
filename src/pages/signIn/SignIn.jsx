import React, { useState } from "react";
import Header from "../../components/generalComponents/header/Header";
import Footer from "../../components/generalComponents/footer/Footer";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.js";
import { useNavigate } from "react-router";
import styles from "./SignIn.module.scss";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
        })
        .catch((error) => {
          console.log(error);
        });
      navigate("/");
    } else {
      console.log("Passwords are not matching");
    }
  };
  return (
    <div>
      <Header></Header>
      <div className={styles["sign-in-form-container"]}>
        <h1>Make an account</h1>
        <form>
          <input
            type="text"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <br />
          <input
            type="text"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <br />
          <input
            type="text"
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
          <br />
          <div className={styles["sign-in-button-container"]}>
            <button onClick={(e) => handleClick(e)}>Create an account</button>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SignIn;
