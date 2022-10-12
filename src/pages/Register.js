import React from 'react'
import styles from './Register.module.css'
import RegisterForm from '../components/RegisterForm'

export default function Register() {
  return (
    <section className={styles.container}>
      <RegisterForm />
    </section>
  )
}
