import { Outlet } from 'react-router-dom';
import { useAppSelector } from '@/store';

import SideBar from './components/side-bar';
import styles from './navigation-layout.module.css';
import Header from './components/header';
import { useDispatch } from 'react-redux';
import { selectUser, unsetAuth, unsetUser } from '@/store/slices/auth-slice';
import { useLocation } from 'react-router-dom';
const NavigationLayout = () => {
  // const admin = useAppSelector(selectAdmin);
  const dispatch = useDispatch()
  const user = useAppSelector(selectUser);
  const location = useLocation()
  const handleLogout = () => {
    dispatch(unsetAuth());
    dispatch(unsetUser());
  };
  const {pathname} = location

  const getHeaderSubTitle = (pathname: string) => {
      if (pathname == "/medblock"){
        return "медблок"
      } 
      else if (pathname == "/psychologist"){
        return "психолог"
      }
      else{
        return ""
      }
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.sideBarWrapper}>
        <SideBar />
      </div>
      <div className={styles.main}>
        <Header user={user} onLogout={handleLogout} subtitle={getHeaderSubTitle(pathname)}/>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default NavigationLayout;
