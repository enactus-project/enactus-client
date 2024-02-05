//import { observer } from 'mobx-react-lite';
//import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

//import { CurrentUserStoreContext } from '@/common/stores/current-user-store';

import { Header } from './components/header';
import styles from './header-layout.module.css';

export const HeaderLayout = (() => {
  //const navigate = useNavigate();
  //const currentUserStore = useContext(CurrentUserStoreContext);

  // const handleLogout = () => {
  //   currentUserStore.logout();
  //   navigate('/auth/sign-in');
  // };

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <Header />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
});
