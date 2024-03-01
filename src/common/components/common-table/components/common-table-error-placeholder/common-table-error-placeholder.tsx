import CommonErrorPlaceholder from '@/common/components/common-error-placeholder';
import styles from './common-table-error-placeholder.module.css';

const CommonTableErrorPlaceholder = () => {
  return (
    <div className={styles.wrapper}>
      <CommonErrorPlaceholder />
    </div>
  );
};

export default CommonTableErrorPlaceholder;
