import React from "react";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
        <h1>Registration</h1>
        <h2>Register As A School Administrator</h2>
      <form className={styles.login_form} onSubmit={handleSubmit}>
        <label className={styles.login_item} htmlFor="email">
          Email:
        </label>
        <input 
            className={styles.login_text_box} 
            id="email"  
            type="text">
        </input>
        <label className={styles.login_item} htmlFor="password">
          Password:
        </label>
        <input
            className={styles.login_text_box}
            id="email"
            type="password"
        ></input>
        <label className={styles.login_item} htmlFor="school_name">
          School Name:
        </label>
        <input 
            className={styles.login_text_box} 
            id="school_name" 
            type="text">
        </input>
        <label className={styles.login_item} htmlFor="school_code">
          School Code Number:
        </label>
        <input
            className={styles.login_text_box}
            id="school_code"
            type="number"
        ></input>
        <input className={styles.button} type="submit" value="Log In"></input>
      </form>
    </section>
  );
}
