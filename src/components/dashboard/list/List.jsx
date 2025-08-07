import React from 'react';
import styles from "./List.module.css";

const List = ({text, icon: Icon}) => {
  return (
    <li className={styles.list}>
        {Icon && <Icon className={styles.icon} />}
        <span>{text}</span>
    </li>
  )
}

export default List
