import React from 'react'
import { MdCalendarMonth } from "react-icons/md";
import { MdDifference } from "react-icons/md";
import { MdWheelchairPickup } from "react-icons/md";
import { MdCheckCircleOutline } from "react-icons/md";
import { MdSchedule } from "react-icons/md";
import styles from "./Dashboard.module.css";
import { MdSearch } from "react-icons/md";
import Button from "../../../../components/dashboard/button/Button";
import HeaderText from "../../../../components/dashboard/headerText/HeaderText";
import Boxes from "../../../../components/dashboard/boxes/Boxes";
import Upcomming from "../../../../components/dashboard/upcoming/Upcomming";

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
        <li className={styles.list}>
          <Boxes text='Doctors' icon={MdDifference}/>
        </li>
        <li className={styles.list}>
          <Boxes text='Patients' icon={MdWheelchairPickup}/>
        </li>
        <li className={styles.list}>
          <Boxes text='New Booking' icon={MdCheckCircleOutline}/>
        </li>
        <li className={styles.list}>
          <Boxes text="Today's Session" icon={MdSchedule}/>
        </li>
      </ul>
      {/* Upcoming */}
      <div className={styles.upcomingList}>
        <Upcomming headerText='Upcoming Appointments until Next Friday' texts={['Heres quick access to upcoming appointments until 7 days', 'More details available in appointments section.']} lists={['Appointment number', 'Patient name', 'Doctor', 'Session']} buttonLable='Show all appointments' />
        <Upcomming headerText='Upcoming Sessions until Next Friday' texts={['Heres quick access of upcoming sessions that scheduled until 7 days', 'Add, remove and many features available in schedule section']} lists={['Session title', 'Doctor', 'Scedule Date and Time']} buttonLable='Show all sessiona' />
      </div>
    </div>

  )
}

export default Dashboard
