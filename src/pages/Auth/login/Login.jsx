import React from 'react'
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <fieldset className={styles.fieldset}>
        <div className={styles.headerTextContainer}>
          <h2 className={styles.header}>Sign in</h2>
          <p className={styles.headerSub}>Enter your credentials to proceed  </p>
        </div>
        <Input label='Username' placeholder='Email or Phone' type='text' />
        <Input label='Password' placeholder='Password' type='password' />
        <p className={styles.forgotPassword}>Forgot password?</p>
        <Button text='Sign in' variant='login' />
        <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>
      </fieldset>
    </div>
  )
}

export default Login
