import React from 'react'
import HeaderText from "../../../components/dashboard/headerText/HeaderText";
import styles from "./Boxes.module.css";

const Boxes = ({text, icon: Icon}) => {
  return (
    <div className={styles.boxesContainer}>
      <div>
        <HeaderText text='1' variant='headerTextColor' />
        <p className={styles.text}> {text}</p>
      </div>
      <div>
        {Icon && <Icon className={styles.icon} />}
      </div>
    </div>
  )
}

export default Boxes
