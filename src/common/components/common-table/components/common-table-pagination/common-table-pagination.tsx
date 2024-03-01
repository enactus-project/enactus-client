import { Pagination } from 'antd';
import { PaginationMeta } from '@/common/entities';
import styles from './common-table-pagination.module.css';

interface Props {
  paginationMeta: PaginationMeta;
  onPageChange?: (page: number) => void;
}

const CommonTablePagination = ({
  paginationMeta,
  onPageChange = () => ({}),
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <Pagination
        current={paginationMeta.page}
        pageSize={paginationMeta.perPage}
        total={paginationMeta.total}
        showSizeChanger={false}
        onChange={onPageChange}
      />
    </div>
  );
};

export default CommonTablePagination;
