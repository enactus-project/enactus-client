import { Tag } from 'antd';

import { PaginationMeta } from '@/common/entities';
import { Student } from '@/common/entities/student';
import CommonTable from '@/common/components/common-table';
import styles from './students-table.module.css';

interface Props {
  students?: Student[];
  isLoading?: boolean;
  hasError?: boolean;
  paginationMeta?: PaginationMeta;
  onPageChange?: (page: number) => void;
}

const StudentsTable = ({
  students = [],
  isLoading = false,
  hasError = false,
  paginationMeta,
  onPageChange = () => ({}),
}: Props) => {
  const getStateLabel = (role: number) => {
    switch (role) {
      case 1:
        return 'Хороший';
      case 2:
        return 'Средний';
      case 3:
        return 'Сложный';
      default:
        return 'Неизвестно';
    }
  };
  const getColorForState = (state: number) => {
    switch (state) {
        case 1:
            return "cyan";
        case 2:
            return "geekblue";
        case 3:
            return "red";
        default:
            return "black"; // Default color if state doesn't match any specific case
    }
  } 
  console.log(students, "Students")

  return (
    <div className={styles.wrapper}>
      <CommonTable>
        <CommonTable.Header className={styles.row}>
          <CommonTable.Cell>ID</CommonTable.Cell>
          <CommonTable.Cell>Фамилия</CommonTable.Cell>
          <CommonTable.Cell>Имя</CommonTable.Cell>
          <CommonTable.Cell>Класс</CommonTable.Cell>
          <CommonTable.Cell>Состояние</CommonTable.Cell>
          <CommonTable.Cell>ИИН</CommonTable.Cell>
          <CommonTable.Cell>Куратор</CommonTable.Cell>
        </CommonTable.Header>
        {isLoading && <CommonTable.LoadingIndicator />}
        {!isLoading && hasError && <CommonTable.ErrorPlaceholder />}
        {!isLoading && !hasError && students.length === 0 && (
          <CommonTable.EmptyPlaceholder />
        )} 
        {!isLoading &&
          !hasError &&
          students.map((student) => (
            <CommonTable.Row key={student.id} className={styles.row}>
              <CommonTable.IdCell id={student.id} link={student.id} />
              <CommonTable.Cell className={styles.surname}>{student.surname}</CommonTable.Cell>
              <CommonTable.Cell className={styles.name}>{student.name}</CommonTable.Cell>
              <CommonTable.Cell>{"11G"}</CommonTable.Cell>
              <CommonTable.Cell>
                <Tag color={getColorForState(student.state)}>{getStateLabel(student.state)}</Tag>
              </CommonTable.Cell>
              <CommonTable.Cell>{student.iin}</CommonTable.Cell>
              <CommonTable.Cell>
                {"Алиева Г.Б"}
              </CommonTable.Cell>
            </CommonTable.Row>
          ))}
        {!isLoading && !hasError && paginationMeta && (
          <CommonTable.Pagination
            paginationMeta={paginationMeta}
            onPageChange={onPageChange}
          />
        )}
      </CommonTable>
    </div>
  );
};

export default StudentsTable;
