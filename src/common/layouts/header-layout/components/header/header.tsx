//import { observer } from 'mobx-react-lite';
//import { useContext } from 'react';
import { Link } from 'react-router-dom';

//import { CurrentUserStoreContext } from '@/common/stores/current-user-store';

//import { HeaderAvatar } from '../header-avatar';
import { HeaderLogo } from '../header-logo';
//import { HeaderSubscription } from '../header-subscription';
import styles from './header.module.css';
import { HeaderProps } from './header.types';

export const Header = (({ }: HeaderProps) => {
  //const currentUserStore = useContext(CurrentUserStoreContext);

  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <Link className={styles.logoLink} to="/">
          <HeaderLogo />
        </Link>
        {/* <div className={styles.row}>
          {!currentUserStore.hasActivePurchase && (
            <div className={styles.subscriptionWrapper}>
              <HeaderSubscription />
            </div>
          )}
          <HeaderAvatar onLogout={onLogout} user={user} />
        </div> */}
      </div>
    </header>
  );
});
