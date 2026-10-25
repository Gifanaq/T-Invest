import { Link } from 'react-router';

import { ROUTES } from '@/config/routes';

import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <Link to={ROUTES.home} className={styles.logo}>
        T-Invest
      </Link>
    </header>
  );
}
