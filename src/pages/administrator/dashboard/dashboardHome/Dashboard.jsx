import React from 'react'
import { MdCalendarMonth, MdSearch } from "react-icons/md";
import styles from "./Dashboard.module.css";
import Button from "../../../../components/dashboard/button/Button";
import HeaderText from "../../../../components/dashboard/headerText/HeaderText";
import Boxes from "../../../../components/dashboard/boxes/Boxes";
import Upcomming from "../../../../components/dashboard/upcoming/Upcomming";
import {upcomingSectionData, boxListData}  from "../../../../data/UIData";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainContainer}>
        <div className={styles.searchMainContainer} >
          <div className={styles.searchContainer}>
            <input type="text" className={styles.input} />
            <span className={styles.icon}><MdSearch /></span>
          </div>
          <Button text='Search' variant='search'/>
        </div>
        <div className={styles.dateContainer} >
          <div >
            <p>Today's Date</p>
            <p className={styles.date}>2025-11-23</p>
          </div>
          <div className={styles.iconContainer}>
            <MdCalendarMonth />
          </div>
        </div>
      </div>
      <div>
        <HeaderText text='Status' variant='headerTextBlack'  />
      </div>
      <ul className={styles.lists}>
        {boxListData.map(({ text, icon }, index) => (
          <li key={index} className={styles.list}>
            <Boxes text={text} icon={icon} />
          </li>
        ))}
      </ul>
      <div className={styles.upcomingList}>
        {upcomingSectionData.map((data, idx) => (
          <Upcomming key={idx} {...data} />
        ))}
      </div>
    </div>

  )
}

export default Dashboard
