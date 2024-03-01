import styles from './common-empty-placeholder.module.css';

interface Props {
  message?: string;
}

const CommonEmptyPlaceholder = ({ message }: Props) => {
  return (
    <div className={styles.wrapper}>
      <img src="/icons/box.svg" alt="Box" className={styles.icon} />
      <span className={styles.text}>{message || 'Похоже, тут ничего нет'}</span>
    </div>
  );
};

export default CommonEmptyPlaceholder;
