import React from 'react'
import Nav from "../../components/navigation/Nav";
import { Outlet } from 'react-router-dom';
import styles from "../layout/Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.container}>
        <Nav variant='home' />
        <div>
          <Outlet />
        </div>
    </div>
  )
}

export default Layout
