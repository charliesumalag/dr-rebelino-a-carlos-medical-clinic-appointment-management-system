import React from 'react'
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Button from "../../components/button/Button";
import HeaderText from '../../components/headerText/HeaderText';

const Home = () => {
  return (
      <div className={styles.textContainer}>
        <div>
          <HeaderText headerText='Avoid Hassles & Delays' variant='home' headerSubText='Book your appointments online and skip the waiting lines. Fast, easy, and stress-free medical scheduling.' />
        {/* <h1 className={styles.headerText}>Avoid Hassles & Delays</h1>
        <p className={styles.textPar}>Book your appointments online and skip the waiting lines. Fast, easy, and stress-free medical scheduling.</p> */}
        </div>
        <Link to='/login'>
          <Button text='Book appointment' variant='home'/>
        </Link>
      </div>


  )
}

export default Home
