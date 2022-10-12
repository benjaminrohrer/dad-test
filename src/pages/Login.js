import React from 'react'
import LoginForm from '../components/LoginForm';
import styles from './Login.module.css'


export default function Login() {
  return (
    <section className={styles.container}>
      <LoginForm />
    </section>
  )
}
