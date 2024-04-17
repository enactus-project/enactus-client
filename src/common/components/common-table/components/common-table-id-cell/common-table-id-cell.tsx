import CommonTableCellWithCopy from '../common-table-cell-with-copy';

interface Props {
  id: string;
}

const CommonTableIdCell = ({ id }: Props) => {
  const getShortId = (id: string) => {
    return id.split('-')[0];
  };

  return (
    <CommonTableCellWithCopy value={id}>
      {getShortId(id)}
    </CommonTableCellWithCopy>
  );
};

export default CommonTableIdCell;
