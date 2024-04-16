import { useEffect, useState } from 'react';
import { useUnauthorizedHandler } from '@/common/api/hooks/use-unauthorized-handler';
import { Student } from '@/common/entities/student';
import styles from './list-psycho-students-view.module.css'
import { StudentsRepository } from '@/modules/students/data/student.repository';
import { Select } from 'antd';
import StudentsPsychoTable from '../../components';
import { PaginationMeta } from '@/common/entities/pagination-meta';
import GeneralMetricsGrid from '@/modules/analytics/components/general-metrics-grid';

const ListPsychoStudentsView = () => {
 
  const unauthorizedHandler = useUnauthorizedHandler();
  
  const [students, setStudents] = useState<Student[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [paginationMeta, setPaginationMeta] = useState<PaginationMeta>({
    page: 1,
    perPage: 20,
    total: 0,
  });

  const studentsRepository = new StudentsRepository();
  
  
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
 
//   const handleEditTopicModalSubmit = async (payload: {name: string, surname:string, state:number, description: string}) => {
 
//     setIsEditDescriptionModalSubmitLoading(true);
//     message.loading({ content: 'Изменяем' });

//     try {
//       await unauthorizedHandler(
//         studentsRepository.updateStudentById(editingDescription?.id ?? '', {
//           name: payload.name,
//           surname: payload.surname,
//           description: payload.description,
//           state: payload.state,
//         }),
//       );

//       message.success({ content: 'Изменено' });
//       setEditingDescription(null);
//       setIsEditDescriptionModalSubmitLoading(false);
//       await loadStudents({ page: paginationMeta.page });
//     } catch {
//       message.error({ content: 'Ошибка' });
//     } finally {
//       setIsEditDescriptionModalSubmitLoading(false);
//     }
//   };
  

//   const handleCreateStudentModalSubmit = async (payload: {name: string, surname:string, state:number, description: string}) => {
   

//     setIsCreateStudentModalVisible(true);

//     try {
//       await unauthorizedHandler(
//         studentsRepository.createStudent(payload),
//       );

//       message.success('Добавлено');
//       loadStudents();
//       setIsCreateStudentModalVisible(false);
//     } catch {
//       message.error('Ошибка');
//     } finally {
//       setIsCreateStudentModalSubmitLoading(false);
//     }
//   };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className={styles.wrapper}>
      <GeneralMetricsGrid />

      <div>
        <Select
          defaultValue="11G"
          className={styles.select}
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: '11G', label: '11G' },
            { value: '9C', label: '9C' },
            { value: '7E', label: '7E' },
    
          ]}
        />
        <span className={styles.class}>*выберите класс</span>
      </div>

      <div className={styles.content}>
        <StudentsPsychoTable
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

export default ListPsychoStudentsView;
