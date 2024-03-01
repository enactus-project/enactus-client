import CommonTableCellWithCopy from '../common-table-cell-with-copy';

interface Props {
  email: string;
}

const CommonTableEmailCell = ({ email }: Props) => {
  return (
    <CommonTableCellWithCopy value={email}>{email}</CommonTableCellWithCopy>
  );
};

export default CommonTableEmailCell;
