import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAuth } from "../../contexts/auth-context";
import styles from "./auth.module.css";

const Auth = () => {
  const { isLogin, setIsLogin } = useAuth();
  const router = useRouter();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  console.log({ isLogin });

  const postLoginForm = async (username, password) => {
    try {
      const res = await axios.post("https://dummyjson.com/auth/login", {
        username: username,
        password: password,
        // expiresInMins: 60, // optional
      });
      setIsLogin(true);
      localStorage?.setItem(
        "login",
        JSON.stringify({
          isUserLoggedIn: true,
        })
      );
      router.push("/products");
    } catch (error) {
      setIsLogin(false);
    }
  };

  const loginHandler = (event) => {
    event.preventDefault();
    postLoginForm(username, password);
  };

  const guestLoginHandler = (event) => {
    event.preventDefault();
    postLoginForm("kminchelle", "0lelplR");
  };

  const logoutHandler = () => {
    localStorage?.removeItem("login");
    setIsLogin(false);
  };

  if (isLogin) {
    return (
      <div className={styles.logout_Box}>
        <h2>Are you sure ?</h2>
        <div className={styles.logout_Buttons}>
          <button className="primaryOutline_button">Go Back</button>
          <button className="primary_button" onClick={logoutHandler}>
            Log Out
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.loginForm}>
      <label htmlFor="username" className={styles.label}>
        Username
      </label>
      <input
        type="text"
        id="username"
        className={styles.input}
        onChange={(event) => setUsername(event.target.value)}
      />
      <label htmlFor="password" className={styles.label}>
        Password
      </label>
      <input
        type="password"
        id="password"
        className={styles.input}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit" className="primary_button" onClick={loginHandler}>
        Log In
      </button>
      <button
        type="submit"
        className="primary_button"
        onClick={guestLoginHandler}
      >
        Guest Login
      </button>
    </form>
  );
};

export default Auth;
