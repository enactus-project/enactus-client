import { NavLink } from 'react-router-dom';
import styles from './side-bar-link.module.css';
import classNames from 'classnames';
import { CommonBoxIcon } from '@/common/components/common-box-icon';

interface Props {
  to: string;
  icon: string;
  label: string;
}

const SideBarLink = ({ to, icon, label }: Props) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => classNames({ [styles.active]: isActive }, styles.link)}
    >
      <div className={classNames(styles.wrapper)}>
        {/* <img src={icon} alt={label} className={styles.icon} /> */}
        <CommonBoxIcon name={icon} className={styles.menu_icon} />
        <span className={styles.title}>{label}</span>
      </div>
    </NavLink>
  );
};

export default SideBarLink;
