import classNames from 'classnames';
import styles from './common-table-cell.module.css';

interface Props {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const CommonTableCell = ({ children, className, onClick }: Props) => {
  return (
    <span
      className={classNames(
        styles.cell,
        { [styles.clickable]: onClick },
        className,
      )}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export default CommonTableCell;
