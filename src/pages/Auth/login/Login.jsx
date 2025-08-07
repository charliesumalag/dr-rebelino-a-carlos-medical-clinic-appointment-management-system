import React from 'react'
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import HeaderText from '../../../components/headerText/HeaderText';

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <fieldset className={styles.fieldset}>
        <HeaderText headerSubText='Enter your credentials to proceed' headerText='Log in'  />
        <Input label='Username' placeholder='Email or Phone' type='text' />
        <Input label='Password' placeholder='Password' type='password' />
        <p className={styles.forgotPassword}>Forgot password?</p>
        <Button text='Sign  in' variant='login' />
        <p>Don't have an account? <Link to='/signup' className={styles.link}>Sign up</Link></p>
      </fieldset>
    </div>
  )
}

export default Login
