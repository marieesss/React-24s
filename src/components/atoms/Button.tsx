import React from 'react'
import styles from "../../styles/button.module.css"
interface ButtonProps {
    handleClick: ()=> void;
    text: string;
}

const Button :  React.FC<ButtonProps> = ({handleClick, text }) => {

  return (
    <button className={styles.button} role="button" onClick={handleClick}>{text}</button>
  )
}

export default Button
