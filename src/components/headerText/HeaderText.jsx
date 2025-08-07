import React from 'react'
import styles from "./HeaderText.module.css";
import clsx from "clsx";
const HeaderText = ({headerSubText, headerText ,variant}) => {
  return (
    <div className={clsx(styles.headerTextContainer)}>
        <h2 className={clsx(styles.header, styles[variant])}>{headerText}</h2>
        <p className={clsx(styles.headerSub)}>{headerSubText}</p>
    </div>
  )
}

export default HeaderText
