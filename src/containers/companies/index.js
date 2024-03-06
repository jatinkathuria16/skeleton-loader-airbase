import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import CircularLoader from '../../components/circularLoader';

export default function Companies() {
  const [input, setInput] = useState();
  const [skip, setSkip] = useState(0);
  const [progress, setProgress] = useState(false);
  const [users, setUsers] = useState([]);
  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    setSkip(Math.floor(Math.random() * 100));
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (input?.length > 3) {
        console.count('fetching');
        fetch(`https://dummyjson.com/users?limit=5&skip=${skip}`)
          .then((res) => res.json())
          .then((json) => {
            setUsers(json?.users);
            setProgress(false);
          });
      }
    }, 800);
    setProgress(true);
    return () => {
      console.log('clean up');
      clearTimeout(timer);
    };
  }, [input, skip]);

  return (
    <div className={styles.container}>
      <h3>search users!!!</h3>
      <input
        className={styles.input}
        onChange={handleChange}
        value={input}
        placeholder="Search"
      />
      {input?.length > 3 ? (
        <div className={styles.dropdown}>
          {!progress && users ? (
            users?.map(({ firstName, lastName, image }) => (
              <div className={styles.result}>
                <img className={styles.image} alt={firstName} src={image} />
                <p style={{ margin: '0 auto' }}>
                  {firstName} {lastName}
                </p>
              </div>
            ))
          ) : (
            <CircularLoader />
          )}
        </div>
      ) : null}
    </div>
  );
}
