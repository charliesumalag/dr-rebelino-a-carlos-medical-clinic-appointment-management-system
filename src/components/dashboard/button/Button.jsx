import React from 'react'
import styles from "./Button.module.css";
import clsx from "clsx";

const Button = ({variant, text}) => {
  return (
    <div className={styles.buttonContainer}>
        <button className={clsx(styles.button, styles[variant], )}>{text}</button>
    </div>
  )
}

export default Button
