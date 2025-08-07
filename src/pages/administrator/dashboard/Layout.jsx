import React from 'react'
import Nav from '../../../components/dashboard/nav/Nav'
import { Outlet } from 'react-router-dom'
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.layoutContainer}>
      <Nav />
      <div className={styles.outletContainer}>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
