import React from 'react';
import styles from './Movie.module.scss';

const Movie = () => {
  return (
    <div className={styles.container}>
      <span className={styles.placeholder}>Выберите фильм</span>
    </div>
  );
};

export default Movie;
