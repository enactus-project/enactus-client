import SideBarLink from './components/side-bar-link';
import styles from './side-bar.module.css';

const SideBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <img src="/tirek-logo.png" alt="Logo" className={styles.logo} />
      </div>
      <nav className={styles.links}>
        <div className={styles.linkWrapper}>
          <SideBarLink
            to="/medblock"
            icon="bx bxs-dashboard"
            label="Панель"
          />
        </div>
        <div className={styles.linkWrapper}>
          <SideBarLink
            to="/"
            icon="bx bx-search-alt-2"
            label="Поиск"
          />
        </div>
        <div className={styles.linkWrapper}>
          <SideBarLink
            to="/documentation"
            icon="bx bx-info-circle"
            label="Документация"
          />
        </div>
        <div className={styles.linkWrapper}>
          <SideBarLink
            to="/basic-moods"
            icon="bx bx-info-circle"
            label="Все ивенты"
          />
        </div>
        <div className={styles.linkWrapper}>
          <SideBarLink
            to="/danger-moods"
            icon="bx bx-info-circle"
            label="Опасные ивенты"
          />
        </div>
        {/* <div className={styles.linkWrapper}>
          <SideBarLink to="/" icon="/chart-square.svg" label="Админы" />
        </div> */}
      </nav>
    </div>
  );
};

export default SideBar;
