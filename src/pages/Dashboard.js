import React from 'react'
import DashboardSelect from '../components/DashboardSelect';
import styles from './Dashboard.module.css'


export default function Login() {
  return (
    <section className={styles.container}>
      <h1>Dashboard</h1>
      <h2>What would you like to do?</h2>
      <DashboardSelect />
    </section>
  )
}
