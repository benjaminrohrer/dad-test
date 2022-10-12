import React from 'react'
import styles from "./NavBar.module.css";
import logofull from './logofull.png'
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className={styles.navigation}>
        <Link to="/"> <img className={styles.image}src={logofull} alt="Logo" /></Link>
      
    </div>
  )
}
