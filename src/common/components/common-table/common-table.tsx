import CommonTableHeader from './components/common-table-header';
import CommonTableRow from './components/common-table-row';
import CommonTableCell from './components/common-table-cell';
import CommonTableCellWithCopy from './components/common-table-cell-with-copy';
import CommonTableIdCell from './components/common-table-id-cell';
import CommonTableDateTimeCell from './components/common-table-date-time-cell';
import CommonTableLoadingIndicator from './components/common-table-loading-indicator';
import CommonTableErrorPlaceholder from './components/common-table-error-placeholder';
import CommonTableEmptyPlaceholder from './components/common-table-empty-placeholder';
import CommonTablePagination from './components/common-table-pagination';
import CommonTableActionsCell from './components/common-table-actions-cell';
import CommonTableEmailCell from './components/common-table-email-cell';

interface Props {
  children?: React.ReactNode;
}

const CommonTable = ({ children }: Props) => {
  return <div>{children}</div>;
};

CommonTable.Header = CommonTableHeader;
CommonTable.Row = CommonTableRow;
CommonTable.Cell = CommonTableCell;
CommonTable.CellWithCopy = CommonTableCellWithCopy;
CommonTable.IdCell = CommonTableIdCell;
CommonTable.DateTimeCell = CommonTableDateTimeCell;
CommonTable.ActionsCell = CommonTableActionsCell;
CommonTable.LoadingIndicator = CommonTableLoadingIndicator;
CommonTable.ErrorPlaceholder = CommonTableErrorPlaceholder;
CommonTable.EmptyPlaceholder = CommonTableEmptyPlaceholder;
CommonTable.Pagination = CommonTablePagination;
CommonTable.EmailCell = CommonTableEmailCell;

export default CommonTable;
