import { useMessage } from '@/common/api/hooks/use-message';
import CommonTableCell from '../common-table-cell/common-table-cell';
import styles from './common-table-cell-with-copy.module.css';
import { useNavigate } from 'react-router-dom';

interface Props {
  value?: string;
  link: string;
  children?: React.ReactNode;
}

const CommonTableCellWithCopy = ({ value, link, children }: Props) => {
  const navigate = useNavigate()
  const linkToStudent = (link: string) => {
    navigate(`/students/${link}`)
  }
  // const handleCopy = () => {
  //   if (value) {
  //     navigator.clipboard.writeText(value);
  //     message.success('Скопировано');
  //   }
  // };

  return (
    <CommonTableCell onClick={() => linkToStudent(link)}>
      <div className={styles.wrapper}>
        <span>{children}</span>
        {/* <img src="/icons/copy.svg" alt="Copy" className={styles.icon} /> */}
      </div>
    </CommonTableCell>
  );
};

export default CommonTableCellWithCopy;
