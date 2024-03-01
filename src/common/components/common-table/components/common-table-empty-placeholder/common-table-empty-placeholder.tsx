import CommonEmptyPlaceholder from '@/common/components/common-empty-placeholder';
import styles from './common-table-empty-placeholder.module.css';

const CommonTableEmptyPlaceholder = () => {
  return (
    <div className={styles.wrapper}>
      <CommonEmptyPlaceholder />
    </div>
  );
};

export default CommonTableEmptyPlaceholder;
