import dayjs from 'dayjs';
import CommonTableCell from '../common-table-cell';

interface Props {
  children?: string;
}

const CommonTableDateTimeCell = ({ children }: Props) => {
  return (
    <CommonTableCell>
      {dayjs(children).format('DD/MM/YYYY HH:mm')}
    </CommonTableCell>
  );
};

export default CommonTableDateTimeCell;
