import { NavLink } from 'react-router-dom';
import styles from './side-bar-link.module.css';
import classNames from 'classnames';

interface Props {
  to: string;
  icon: string;
  label: string;
}

const SideBarLink = ({ to, icon, label }: Props) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => classNames({ [styles.active]: isActive })}
    >
      <div className={classNames(styles.wrapper)}>
        <img src={icon} alt={label} className={styles.icon} />
      </div>
    </NavLink>
  );
};

export default SideBarLink;
