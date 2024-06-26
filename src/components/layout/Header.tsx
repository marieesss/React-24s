import React from 'react'
import styles from "../../styles/header.module.css"
import SwitchDarkMode from '../molecules/SwitchDarkMode'

const Header = () => {
  return (
    <header className={styles.headerContainer}>
            <div className={styles.justifyContent}>
            <h1>Marie</h1>
            <h1>Marie</h1>
            </div>
            <div className={styles.switch}>
            <SwitchDarkMode/>
            </div>
    </header>
  )
}

export default Header
