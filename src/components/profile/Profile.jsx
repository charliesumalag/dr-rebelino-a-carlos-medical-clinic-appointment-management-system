import React from 'react'
import styles from "./Profile.module.css";
import profile from '../../assets/images/defaultProfile.jpg'

const Profile = ({accountName, emailPhone}) => {
  return (
    <div className={styles.profileContainer}>
        <div className={styles.profileImageContainer}>
            <img src={profile} alt="administrator profile picture" className={styles.image} />
        </div>
        <div>
          <h3 className={styles.accountName}>{accountName}</h3>
          <span className={styles.email}>{emailPhone}</span>
        </div>
    </div>
  )
}

export default Profile
