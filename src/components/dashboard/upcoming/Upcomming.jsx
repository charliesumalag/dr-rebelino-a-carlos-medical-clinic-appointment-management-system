import React from 'react'
import styles from "./Upcomming.module.css";
import HeaderText from "../../../components/dashboard/headerText/HeaderText";
import Button from "../button/Button";

const Upcomming = ({headerText, texts, lists, buttonLable}) => {
  return (
    <div className={styles.wrapper}>
      <HeaderText text={headerText} variant='headerTextColor'/>
      <div className={styles.subText}>
        {texts.map((text, index) => (
           <p key={index}>{text}</p>
        ))}
      </div>
      <div className={styles.listContainer}>
        <ul className={styles.lists}>
          {lists.map((list,index) => (
            <li key={index}>{list}</li>
          ))}
        </ul>
        <h3 className={styles.listUpcoming}>No List</h3>
      </div>
      <Button text={buttonLable} variant='showUpcomming'/>
    </div>
  )
}

export default Upcomming
