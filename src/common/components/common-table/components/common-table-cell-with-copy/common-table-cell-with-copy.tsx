import { useMessage } from '@/common/api/hooks/use-message';
import CommonTableCell from '../common-table-cell/common-table-cell';
import styles from './common-table-cell-with-copy.module.css';

interface Props {
  value?: string;
  children?: React.ReactNode;
}

const CommonTableCellWithCopy = ({ value, children }: Props) => {
  const message = useMessage();

  const handleCopy = () => {
    if (value) {
      navigator.clipboard.writeText(value);
      message.success('Скопировано');
    }
  };

  return (
    <CommonTableCell>
      <div className={styles.wrapper} onClick={handleCopy}>
        <span>{children}</span>
        {/* <img src="/icons/copy.svg" alt="Copy" className={styles.icon} /> */}
      </div>
    </CommonTableCell>
  );
};

export default CommonTableCellWithCopy;
