import React from 'react';
import styles from "./Nav.module.css";
import clsx from "clsx";
import { Link } from 'react-router-dom';

const Nav = ({variant}) => {
  return (
    <nav className={clsx(styles.navContainer, styles[variant])}>
      <div className=''>
        <h2 className={styles.headerText}>  eDoc.<span className={styles.spanHeaderText}> | R-A-C Medical Clinic</span></h2>
      </div>
      <ul className={styles.nav}>
        <li ><Link to='/login' className={styles.li}  >Login</Link></li>
        <li className={styles.li}><Link to='/signup'>Register</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
