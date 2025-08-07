import React from 'react'
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Button from "../../components/button/Button";

const Home = () => {
  return (
      <div className={styles.textContainer}>
        <div>
        <h1>Avoid Hassles & Delays</h1>
        <p className={styles.textPar}>Book your appointments online and skip the waiting lines. Fast, easy, and stress-free medical scheduling.</p>
        </div>
        <Link to='/login'>
          <Button text='Book appointment' variant='home'/>
        </Link>
      </div>


  )
}

export default Home
