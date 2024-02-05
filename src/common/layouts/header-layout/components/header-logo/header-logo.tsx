import styles from './header-logo.module.css';

export const HeaderLogo = () => (
  <div className={styles.wrapper}>
    <img alt="Логотип" className={styles.logo} src="/logo-no-background.svg" />
    <div className={styles.textContainer}>
      <span className={styles.title}>Ворки</span>
      <span className={styles.subtitle}>Карьерный анти-коуч</span>
    </div>
  </div>
);
