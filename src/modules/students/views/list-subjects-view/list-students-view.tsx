import { useEffect, useState } from 'react';
import { useUnauthorizedHandler } from '@/common/api/hooks/use-unauthorized-handler';
import { Student } from '@/common/entities/student';
import CommonPageTitle from '@/common/components/common-page-title';
import styles from './list-students-view.module.css';
import { StudentsRepository } from '../../data/student.repository';
import { Button, Select, message } from 'antd';
import StudentsTable from '../../components/students-table';
import { PaginationMeta } from '@/common/entities/pagination-meta';
import { useMessage } from '@/common/api/hooks/use-message';
import EditDescriptionModal from '../../components/edit-description-modal';
import { PlusCircleOutlined } from '@ant-design/icons';
import GeneralMetricsGrid from '@/modules/analytics/components/general-metrics-grid';

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
  const [isEditDescriptionModalSubmitLoading, setIsEditDescriptionModalSubmitLoading] =
  useState<boolean>(false);
  const [editingDescription, setEditingDescription] = useState<Student| null>(null);
  const [isEditDescriptionModalVisible, setIsEditDescriptionModalVisible] =
    useState<boolean>(false);
  const [isCreateStudentModalVisible, setIsCreateStudentModalVisible] =
    useState<boolean>(false);
  const [isCreateStudentModalSubmitLoading, setIsCreateStudentModalSubmitLoading] =
    useState<boolean>(false);
  const studentsRepository = new StudentsRepository();
  
  
  useEffect(() => {
    loadStudents();
    console.log(students, "FROM LIST")
  }, []);
  

  
  const loadStudents = async ({ page = 1 } = { page: 1 }) => {
    setHasError(false);
    setIsLoading(true);

    try {
      const [fetchedStudents, fetchedPaginationMeta] = await unauthorizedHandler(
        studentsRepository.getStudents({ page }),
      );
      setStudents(fetchedStudents);
      console.log(students, "FROM LIST")
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

  const handleEditTopicModalClose = () => {
    setIsEditDescriptionModalVisible(false);
    setEditingDescription(null);
  };

  const handleAddStudentClick = () => {
    setIsCreateStudentModalVisible(true);
  };

  const handleCreateStudentModalClose = () => {
    setIsCreateStudentModalVisible(false);
  };

  const handleDescriptionEditClick = () => {
    setIsEditDescriptionModalVisible(true);
  };
 
  const handleEditTopicModalSubmit = async (payload: {name: string, surname:string, state:number, description: string}) => {
 
    setIsEditDescriptionModalSubmitLoading(true);
    message.loading({ content: 'Изменяем' });

    try {
      await unauthorizedHandler(
        studentsRepository.updateStudentById(editingDescription?.id ?? '', {
          name: payload.name,
          surname: payload.surname,
          description: payload.description,
          state: payload.state,
        }),
      );

      message.success({ content: 'Изменено' });
      setEditingDescription(null);
      setIsEditDescriptionModalSubmitLoading(false);
      await loadStudents({ page: paginationMeta.page });
    } catch {
      message.error({ content: 'Ошибка' });
    } finally {
      setIsEditDescriptionModalSubmitLoading(false);
    }
  };
  

  const handleCreateStudentModalSubmit = async (payload: {name: string, surname:string, state:number, description: string}) => {
   

    setIsCreateStudentModalVisible(true);

    try {
      await unauthorizedHandler(
        studentsRepository.createStudent(payload),
      );

      message.success('Добавлено');
      loadStudents();
      setIsCreateStudentModalVisible(false);
    } catch {
      message.error('Ошибка');
    } finally {
      setIsCreateStudentModalSubmitLoading(false);
    }
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className={styles.wrapper}>

      <div className={styles.controls}>
        <Button
          icon={<PlusCircleOutlined />}
          type="primary"
          onClick={handleAddStudentClick}
        >
          Добавить
        </Button>
      </div>
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
        <StudentsTable
          students={students}
          paginationMeta={paginationMeta}
          isLoading={isLoading}
          hasError={hasError}
          onPageChange={handlePageChange}
        />
      </div>
      <EditDescriptionModal
        title="Добавить ученика"
        visible={isCreateStudentModalVisible}
        submitLoading={isCreateStudentModalSubmitLoading}
        submitText="Добавить"
        onSubmit={handleCreateStudentModalSubmit}
        onCancel={handleCreateStudentModalClose}
      />
      <EditDescriptionModal
        initialData={{
          name: editingDescription?.name ?? '',
          surname: editingDescription?.surname ?? '',
          state: editingDescription?.state ?? 1,
          description: editingDescription?.surname ?? '',
        }}
        title="Редактирование темы"
        visible={isEditDescriptionModalVisible}
        submitLoading={isEditDescriptionModalSubmitLoading}
        submitText="Изменить"
        onSubmit={handleEditTopicModalSubmit}
        onCancel={handleEditTopicModalClose}
      />
    </div>
  );
};

export default ListStudentsView;
