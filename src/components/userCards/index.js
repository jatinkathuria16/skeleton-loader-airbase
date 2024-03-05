/* eslint-disable react/prop-types */

// core
import React from 'react';

// styles
import styles from './style.module.css';

export default function UserCard({ user }) {
  const { firstName, lastName, image, address, email, company } = user;
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        alt={`${firstName} ${lastName}`}
        src={image}
      />
      <div className={styles.infoContainer}>
        <h3 className={styles.title}>
          {firstName} {lastName}
        </h3>
        <p className={styles.info}>{company.title}</p>
        <p
          className={styles.info}
        >{`${address?.address}, ${address?.city}, ${address?.state}`}</p>
        <a
          href={`mailto:${email}`}
          className={styles.info}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          {email}
        </a>
      </div>
    </div>
  );
}
