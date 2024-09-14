import { Outlet } from 'react-router-dom';
import { Header } from './components/header';
import styles from './header-layout.module.css';
import { useAppSelector } from '@/store';
import { selectUser, unsetAuth, unsetUser } from '@/store/slices/auth-slice';
import { useAppDispatch } from '@/store';

export const HeaderLayout = (() => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(selectUser);
  const handleLogout = () => {
    dispatch(unsetAuth());
    dispatch(unsetUser());
  };
   
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <Header user={user} onLogout={handleLogout} />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
});
