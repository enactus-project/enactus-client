import { Outlet } from 'react-router-dom';
import { useAppSelector } from '@/store';

import SideBar from './components/side-bar';
import styles from './navigation-layout.module.css';

const NavigationLayout = () => {
  // const admin = useAppSelector(selectAdmin);

  return (
    <div className={styles.wrapper}>
      <div className={styles.sideBarWrapper}>
        <SideBar />
      </div>
      <div className={styles.main}>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default NavigationLayout;
