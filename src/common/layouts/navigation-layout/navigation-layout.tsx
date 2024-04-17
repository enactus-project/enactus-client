import { Outlet } from 'react-router-dom';
import { useAppSelector } from '@/store';

import SideBar from './components/side-bar';
import styles from './navigation-layout.module.css';
import Header from './components/header';
import { useDispatch } from 'react-redux';
import { selectUser, unsetAuth, unsetUser } from '@/store/slices/auth-slice';

const NavigationLayout = () => {
  // const admin = useAppSelector(selectAdmin);
  const dispatch = useDispatch()
  const user = useAppSelector(selectUser);

  const handleLogout = () => {
    dispatch(unsetAuth());
    dispatch(unsetUser());
  };
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.sideBarWrapper}>
        <SideBar />
      </div>
      <div className={styles.main}>
        <Header user={user} onLogout={handleLogout}/>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default NavigationLayout;
