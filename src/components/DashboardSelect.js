import React from "react";
import styles from "./DashboardSelect.module.css";
import { Link } from "react-router-dom";

export default function DashboardSelect() {
  
  
  return (
    <section className={styles.container}>
      <Link className={styles.button} to="/register">Register</Link>
      <Link className={styles.button} to="/login">Login</Link>
      <Link className={styles.button} to="/essay_submit">Submit Essay</Link>
    </section>
  );
}
