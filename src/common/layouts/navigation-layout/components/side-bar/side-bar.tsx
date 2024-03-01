import SideBarLink from './components/side-bar-link';
import styles from './side-bar.module.css';

const SideBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <img src="/avocado.png" alt="Logo" className={styles.logo} />
      </div>
      <nav className={styles.links}>
        <div className={styles.linkWrapper}>
          <SideBarLink
            to="/"
            icon="/chart-square.svg"
            label="Аналитика"
          />
        </div>
        <div className={styles.linkWrapper}>
          <SideBarLink
            to="/users"
            icon="/icons/users-group.svg"
            label="Пользователи"
          />
        </div>
        <div className={styles.linkWrapper}>
          <SideBarLink
            to="/subjects"
            icon="/icons/teacher.svg"
            label="Контент"
          />
        </div>
        <div className={styles.linkWrapper}>
          <SideBarLink to="/admins" icon="/icons/admin.svg" label="Админы" />
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
