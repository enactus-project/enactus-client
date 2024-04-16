import CommonTableCellWithCopy from '../common-table-cell-with-copy';

interface Props {
  id: string;
  link: string
}

const CommonTableIdCell = ({ id, link }: Props) => {
  const getShortId = (id: string) => {
    return id.split('-')[0];
  };

  return (
    <CommonTableCellWithCopy value={id} link={link}>
      {getShortId(id)}
    </CommonTableCellWithCopy>
  );
};

export default CommonTableIdCell;
