import React from 'react'
import { MdDashboard } from 'react-icons/md';
import { MdDifference } from "react-icons/md";
import { MdSchedule } from "react-icons/md";
import { MdCheckCircleOutline } from "react-icons/md";
import { MdWheelchairPickup } from "react-icons/md";
import Profile from '../../profile/Profile'
import Button from "../../../components/dashboard/button/Button";
import styles from "./Nav.module.css";
import List from '../list/List';
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.profileContainer}>
        <Profile accountName='Administrator' emailPhone='edoc.yahoo.com' />
        <Button text='Log out' variant='logout' />
       </div>
      <hr className={styles.hr} />
      <ul className={styles.listContainer}>
        <li>
          <NavLink to="/admin" end className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>
            {({ isActive }) => (
              <List text="Dashboard" icon={MdDashboard} isActive={isActive} />
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/doctor" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>
            {({isActive}) => (
              <List text="Doctors" icon={MdDifference} isActive={isActive} />
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/schedule" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>
            {({isActive}) => (
            <List text="Schedule" icon={MdSchedule} isActive={isActive} />
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/appointment" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>
            {({isActive}) => (
            <List text="Appointment" icon={MdCheckCircleOutline} isActive={isActive} />
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/patient" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>
            {({isActive}) => (
            <List text="Patient" icon={MdWheelchairPickup} isActive={isActive} />
            )}
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Nav
