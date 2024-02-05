import styles from './mobile-blocker-layout.module.css';
import { MobileBlockerLayoutProps } from './mobile-blocker-layout.types';

export const MobileBlockerLayout = ({ children }: MobileBlockerLayoutProps) => (
  <div className={styles.wrapper}>
    <div className={styles.blocker}>
      <span className={styles.text}>
        К сожалению, "Название проекта" пока не доступен с мобильных устройств и планшетов.
        Воспользуйся компьютером, чтобы продолжить
      </span>
    </div>
    {children}
  </div>
);
