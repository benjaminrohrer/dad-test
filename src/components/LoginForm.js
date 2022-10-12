import React from "react";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.login_form} onSubmit={handleSubmit}>
      <label className={styles.login_item} htmlFor="email">
        Email:
      </label>
      <input className={styles.login_text_box} id="email" type="text"></input>
      <label className={styles.login_item} htmlFor="password">
        Password:
      </label>
      <input
        className={styles.login_text_box}
        id="email"
        type="password"
      ></input>
      <input className={styles.button} type="submit" value="Log In"></input>
    </form>
  );
}
