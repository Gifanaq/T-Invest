import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} T-Invest</span>
    </footer>
  );
}
