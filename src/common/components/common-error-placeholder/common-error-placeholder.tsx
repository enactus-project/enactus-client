import styles from './common-error-placeholder.module.css';

const CommonErrorPlaceholder = () => {
  return (
    <div className={styles.wrapper}>
      <img src="/icons/alarm.svg" alt="Alarm" className={styles.icon} />
      <span className={styles.text}>Упс, что-то пошло не так</span>
    </div>
  );
};

export default CommonErrorPlaceholder;
