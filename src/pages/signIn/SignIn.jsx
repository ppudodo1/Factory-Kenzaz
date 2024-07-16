import React, { useState } from "react";
import Header from "../../components/generalComponents/header/Header";
import Footer from "../../components/generalComponents/footer/Footer";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.js";
import { useNavigate } from "react-router";
import styles from "./SignIn.module.scss";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [signInError, setSignInError] = useState(false);
  const [passwordMatching, setPasswordMatching] = useState(false);
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        await updateProfile(user, {
          displayName: displayName,
        });
        console.log("New user profile", user);
        navigate("/");
      } catch (error) {
        console.error("Error creating user: ", error);
        setSignInError(true);
      }
    } else {
      console.log("Passwords are not matching");
      setPasswordMatching(true);
    }
  };

  return (
    <div>
      <Header />
      <div className={styles["sign-in-form-container"]}>
        <h1>Make an account</h1>
        {signInError && <p>Error making an account</p>}
        {passwordMatching && <p>Passwords are not matching</p>}
        <form>
          <input
            type="text"
            placeholder="username"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <br />
          <input
            type="password"
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
          <br />
          <div className={styles["sign-in-button-container"]}>
            <button onClick={handleClick}>Create an account</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
