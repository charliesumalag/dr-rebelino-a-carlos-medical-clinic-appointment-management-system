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
        <NavLink to='/admin' >
          <List text='Dashboard' icon={DashboardIcon} />
        </NavLink>
        <NavLink to='/admin/doctor' >
          <List text='Doctors' icon={DoctorIcon} />
        </NavLink>
        <NavLink to='/admin/schedule'>
          <List text='Schedule' icon={CalendarIcon} />
        </NavLink>
        <NavLink to='/admin/appointment'>
          <List text='Appointment' icon={AppointmentIcon} />
        </NavLink>
        <NavLink to='/admin/patient'>
          <List text='Patient' icon={PatientIcon} />
        </NavLink>
      </ul>
    </div>
  )
}

export default Nav
