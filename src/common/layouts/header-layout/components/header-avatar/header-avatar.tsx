import { Dropdown, MenuProps } from 'antd';

import styles from './header-avatar.module.css';
import { HeaderAvatarProps } from './header-avatar.types';
import { CommonButton } from '@/common/components/common-button';

export const HeaderAvatar = ({ user, onLogout }: HeaderAvatarProps) => {
  const items: MenuProps['items'] = [
    {
      danger: true,
      key: 'logout',
      label: <span onClick={onLogout}>Выйти</span>,
    },
  ];

  return (
    <>
      {user ? (    <Dropdown menu={{ items }}>
      <div className={styles.wrapper}>
        <img
          alt="Пользователь"
          className={styles.userIcon}
          src="/profile-circle.svg"
        />
        <div className={styles.textContainer}>
          <span className={styles.name}>{user?.firstName || 'Не указано'}</span>
          <span className={styles.email}>{user?.email}</span>
        </div>
      </div>
      </Dropdown>) :
       (
          <CommonButton>Войти</CommonButton>
       )}
    </>
  )
};
