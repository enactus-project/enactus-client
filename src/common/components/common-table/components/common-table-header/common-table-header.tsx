import classNames from 'classnames';
import CommonTableRow from '../common-table-row';
import styles from './common-table-header.module.css';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const CommonTableHeader = ({ children, className }: Props) => {
  return (
    <CommonTableRow className={classNames(className, styles.header)}>
      {children}
    </CommonTableRow>
  );
};

export default CommonTableHeader;
