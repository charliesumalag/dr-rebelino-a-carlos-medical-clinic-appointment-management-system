import React from 'react'
import styles from "./Input.module.css";

const Input = ({type, placeholder}) => {
  return (
   <div className={styles.inputContainer}>
        <input type={type} placeholder={placeholder} className={styles.input} />
   </div>
  )
}

export default Input
