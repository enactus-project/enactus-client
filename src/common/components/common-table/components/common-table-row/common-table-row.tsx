import classNames from 'classnames';
import styles from './common-table-row.module.css';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const CommonTableRow = ({ children, className }: Props) => {
  return <div className={classNames(styles.row, className)}>{children}</div>;
};

export default CommonTableRow;
