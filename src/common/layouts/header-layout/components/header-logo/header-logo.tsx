import styles from './header-logo.module.css';

export const HeaderLogo = () => (
  <div className={styles.wrapper}>
    <img alt="Логотип" className={styles.logo} src="/vite.svg" />
    <div className={styles.textContainer}>
      <span className={styles.title}>Safely</span>
      <span className={styles.subtitle}>Ментальное здоровье</span>
    </div>
  </div>
);
