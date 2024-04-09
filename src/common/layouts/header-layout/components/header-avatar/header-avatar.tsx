import { Dropdown, MenuProps } from 'antd';

import styles from './header-avatar.module.css';
import { HeaderAvatarProps } from './header-avatar.types';
import { HeaderAuthButton } from '../header-auth-button';

export const HeaderAvatar = ({ user, onLogout }: HeaderAvatarProps) => {
  const items: MenuProps['items'] = [
    {
      danger: true,
      key: 'logout',
      label: <span onClick={onLogout}>Выйти</span>,
    },
  ];

  console.log(user, 'USER in header')
  return (
    <>
      {user ? ( <Dropdown menu={{ items }}>
      <div className={styles.wrapper}>
        <img
          alt="Пользователь"
          className={styles.userIcon}
          src="/profile-circle.svg"
        />
        <div className={styles.textContainer}>
          <span className={styles.name}>{user?.name || 'Не указано'}</span>
          <span className={styles.email}>{user?.email}</span> 
        </div>
      </div>
      </Dropdown>) :
       (
          <HeaderAuthButton/>
       )}
    </>
  )
};
