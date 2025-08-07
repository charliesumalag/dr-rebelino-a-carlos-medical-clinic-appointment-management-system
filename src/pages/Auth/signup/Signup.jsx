import React from 'react'
import styles from "./Signup.module.css";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className={styles.signupContainer}>
      <fieldset className={styles.fieldset}>
        <div className={styles.headerTextContainer}>
          <h2 className={styles.header}>Register</h2>
          <p className={styles.headerSub}>Fill in your details to get started </p>
        </div>
        <div className={styles.flex}>
          <Input label='Username' placeholder='First Name' type='text' />
          <Input label='Username' placeholder='Last Name' type='text' />
        </div>
        <Input label='Username' placeholder='Email or Phone' type='text' />
        <Input label='Password' placeholder='Password' type='password' />
        <Input label='Password' placeholder='Confirm Password' type='password' />
        <Button text='Sign in' variant='login' />
        <p>Already have an account? <Link to='/login'>Log in</Link></p>
      </fieldset>
    </div>
  )
}

export default Signup
