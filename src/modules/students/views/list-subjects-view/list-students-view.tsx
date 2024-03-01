import { useEffect, useState } from 'react';
import { useUnauthorizedHandler } from '@/common/api/hooks/use-unauthorized-handler';
import { Student } from '@/common/entities/student';
import CommonPageTitle from '@/common/components/common-page-title';
import styles from './list-students-view.module.css';
import { StudentsRepository } from '../../data/student.repository';
import StudentsTable from '../../components/students-table';
import { PaginationMeta } from '@/common/entities/pagination-meta';

const studentsRepository = new StudentsRepository();

const ListStudentsView = () => {
  const unauthorizedHandler = useUnauthorizedHandler();

  const [students, setStudents] = useState<Student[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [paginationMeta, setPaginationMeta] = useState<PaginationMeta>({
    page: 1,
    perPage: 20,
    total: 0,
  });
  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async ({ page = 1 } = { page: 1 }) => {
    setHasError(false);
    setIsLoading(true);

    try {
      const [fetchedStudents, fetchedPaginationMeta] = await unauthorizedHandler(
        studentsRepository.getStudents({ page }),
      );
      setStudents(fetchedStudents);
      setPaginationMeta(fetchedPaginationMeta);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };
  const handlePageChange = (page: number) => {
    loadStudents({ page });
  };

  return (
    <div className={styles.wrapper}>
      <CommonPageTitle>Студенты - Медицина</CommonPageTitle>
      <div className={styles.content}>
        <StudentsTable
          students={students}
          paginationMeta={paginationMeta}
          isLoading={isLoading}
          hasError={hasError}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ListStudentsView;
