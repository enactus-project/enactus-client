import { Link } from 'react-router-dom';
import styles from './common-back-button.module.css'

interface Props {
  to: string;
  text?: string | null;
}

const CommonBackButton = ({ to, text }: Props) => {
  return (
    <div className={styles.wrapper}>
      <Link to={to} className={styles.link}>
        <img
          src="/arrow-left.svg"
          alt="Arrow Left"
          className={styles.icon}
        />
        <span className={styles.text}>{text ?? 'Назад'}</span>
      </Link>
    </div>
  );
};

export default CommonBackButton;
