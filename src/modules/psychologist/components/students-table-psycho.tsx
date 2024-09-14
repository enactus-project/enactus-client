import { PaginationMeta } from '@/common/entities';
import { Student } from '@/common/entities/student';

import styles from './students-table-psycho.module.css'

interface Props {
  students?: Student[];
  isLoading?: boolean;
  hasError?: boolean;
  paginationMeta?: PaginationMeta;
  onPageChange?: (page: number) => void;
}

const StudentsPsychoTable = ({

}: Props) => {
  return (
    <div className={styles.wrapper}>

    </div>
  );
};

export default StudentsPsychoTable;

