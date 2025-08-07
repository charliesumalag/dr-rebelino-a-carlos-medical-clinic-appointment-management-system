import React from 'react'
import styles from "./Signup.module.css";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import { Link } from 'react-router-dom';
import HeaderText from '../../../components/headerText/HeaderText';

const Signup = () => {
  return (
    <div className={styles.signupContainer}>
      <fieldset className={styles.fieldset}>
        <HeaderText headerText='Register' headerSubText='Fill in your details to get started' />
        <div className={styles.flex}>
          <Input label='Username' placeholder='First Name' type='text' />
          <Input label='Username' placeholder='Last Name' type='text' />
        </div>
        <Input label='Username' placeholder='Email or Phone' type='text' />
        <Input label='Password' placeholder='Password' type='password' />
        <Input label='Password' placeholder='Confirm Password' type='password' />
        <Button text='Sign up' variant='login' />
        <p>Already have an account? <Link to='/login' className={styles.link}>Log in</Link></p>
      </fieldset>
    </div>
  )
}

export default Signup
