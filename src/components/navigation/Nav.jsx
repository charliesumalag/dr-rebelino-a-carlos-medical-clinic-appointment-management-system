import React from 'react';
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.navContainer}>
      <div className=''>
        <h2 className={styles.headerText}>Dr. Rebelino A. Carlos Medical Clinic</h2>
      </div>
      <ul className={styles.nav}>
          <li>Login</li>
          <li>Register</li>
      </ul>
    </nav>
  )
}

export default Nav
