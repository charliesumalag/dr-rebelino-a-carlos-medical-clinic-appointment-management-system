import React from 'react';
import styles from "./List.module.css";
import clsx from "clsx";


const List = ({text, icon: Icon, isActive}) => {
  return (
    <div className={clsx(styles.list, isActive && styles.active)}>
      {Icon && <Icon className={styles.icon} />}
      <span className={styles.text}>{text}</span>
    </div>
  )
}

export default List
