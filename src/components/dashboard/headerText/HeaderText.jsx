import React from 'react'
import styles from "./HeaderText.module.css";
import clsx from "clsx";
const HeaderText = ({text, variant}) => {
  return (
    <h2 className={clsx(styles.headerText, styles[variant])}>{text}</h2>
  )
}

export default HeaderText
