import React from 'react'
import styles from "../../styles/header.module.css"
import SwitchDarkMode from '../molecules/SwitchDarkMode'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className={styles.headerContainer}>
            <div className={styles.justifyContent}>
            <Link to={"/"}>
            <h1>Home</h1>
            </Link>
            <Link to={"/about"}>
            <h1>About</h1>
            </Link>
            </div>
            <div className={styles.switch}>
            <SwitchDarkMode/>
            </div>
    </header>
  )
}

export default Header
