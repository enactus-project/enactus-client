//import { observer } from 'mobx-react-lite';
//import { useContext } from 'react';
import { Link } from 'react-router-dom';

//import { CurrentUserStoreContext } from '@/common/stores/current-user-store';

//import { HeaderAvatar } from '../header-avatar';
import { HeaderLogo } from '../header-logo';
//import { HeaderSubscription } from '../header-subscription';
import styles from './header.module.css';
import { HeaderProps } from './header.types';
import { HeaderAvatar } from '../header-avatar';
import { HeaderDropDown } from '../header-dropdown/header-dropdown';
import { firstItems } from './header-dropdown.items';
import { CommonBoxIcon } from '@/common/components/common-box-icon';

export const Header = (({user, onLogout}: HeaderProps) => {
  
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.upper}>
          <Link className={styles.logoLink} to="/">
            <HeaderLogo />
          </Link>
          <div className={styles.nav_right}>
            <div className={styles.navigation_container}>
              <CommonBoxIcon name="bx bxs-location-plus" className={styles.icon} />
              <span className={styles.navigation}>Алматы</span>
            </div>
            <Link className={styles.nav_item} to = "/">Стать партнером</Link>
            <Link className={styles.nav_item} to = "/">Контакты</Link>
            <Link className={styles.nav_item} to = "/platform">Платформа</Link>
            <HeaderAvatar user={user} onLogout={onLogout}/>
          </div>
        </div>
        <div className={styles.down}>
          <HeaderDropDown title="Проблемные мотивы" items={firstItems}/>
          <HeaderDropDown title="Проблемные мотивы" items={firstItems}/>
          <HeaderDropDown title="Проблемные мотивы" items={firstItems}/>
          <HeaderDropDown title="Проблемные мотивы" items={firstItems}/>
          <HeaderDropDown title="Проблемные мотивы" items={firstItems}/>
        </div>
      </div>
      <div className={styles.line}>

      </div>

    </header>
  );
});
