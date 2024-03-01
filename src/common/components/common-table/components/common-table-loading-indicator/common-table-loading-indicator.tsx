import CommonLoadingIndicator from '@/common/components/common-loading-indicator';
import styles from './common-table-loading-indicator.module.css';

const CommonTableLoadingIndicator = () => {
  return (
    <div className={styles.wrapper}>
      <CommonLoadingIndicator />
    </div>
  );
};

export default CommonTableLoadingIndicator;
