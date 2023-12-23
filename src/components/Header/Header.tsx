import { useCallback } from 'react';
import Button from '../Button/Button';
import styles from './Header.module.scss';

export const Header = () => {

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1 className={styles.logo}>Админка фильмотеки</h1>
        <Button>Боровик Никита</Button>
      </div>
    </header>
  );
};
