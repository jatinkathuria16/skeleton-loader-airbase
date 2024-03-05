/* eslint-disable react/prop-types */

// core
import React from 'react';

// styles
import styles from './style.module.css';

export default function UserStories({ story }) {
  const { title, body, tags } = story;
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.info}>{body}</p>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <div className={styles.tag} key={tag}>
              {`${tag[0]?.toUpperCase()}${tag.slice(1)}`}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
