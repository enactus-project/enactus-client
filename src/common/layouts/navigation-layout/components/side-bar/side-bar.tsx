import SideBarLink from './components/side-bar-link';
import styles from './side-bar.module.css';

const SideBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <img src="/vite.svg" alt="Logo" className={styles.logo} />
      </div>
      <nav className={styles.links}>
        <div className={styles.linkWrapper}>
          <SideBarLink
            to="/platform"
            icon="/chart-square.svg"
            label="Аналитика"
          />
        </div>
        <div className={styles.linkWrapper}>
          <SideBarLink
            to="/"
            icon="/chart-square.svg"
            label="Пользователи"
          />
        </div>
        <div className={styles.linkWrapper}>
          <SideBarLink
            to="/"
            icon="/chart-square.svg"
            label="Контент"
          />
        </div>
        <div className={styles.linkWrapper}>
          <SideBarLink to="/" icon="/chart-square.svg" label="Админы" />
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
