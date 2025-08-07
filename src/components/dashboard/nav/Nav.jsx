import React from 'react'
import DashboardIcon from '../../../assets/dashboardIcon.svg?react';
import DoctorIcon from "../../../assets/health.svg?react";
import CalendarIcon from "../../../assets/calendar.svg?react";
import AppointmentIcon from "../../../assets/appointment.svg?react";
import PatientIcon from "../../../assets/patient.svg?react";
import Profile from '../../profile/Profile'
import Button from "../../../components/dashboard/button/Button";
import styles from "./Nav.module.css";
import List from '../list/List';

const Nav = () => {
  return (
    <div className={styles.navContainer}>
      <Profile accountName='Administrator' emailPhone='edoc.yahoo.com' />
      <Button text='Log out' variant='logout' />
      <hr className={styles.hr} />
      <ul className={styles.listContainer}>
        <List text='Dashboard' icon={DashboardIcon} />
        <List text='Doctors' icon={DoctorIcon} />
        <List text='Schedule' icon={CalendarIcon} />
        <List text='Appointment' icon={AppointmentIcon} />
        <List text='Patient' icon={PatientIcon} />
      </ul>
    </div>
  )
}

export default Nav
