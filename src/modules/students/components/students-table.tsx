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
  const getStateLabel = (emotion: number) => {
    switch (emotion) {
      case 1:
        return 'Злой'; // Angry
      case 2:
        return 'Отвратительно'; // Disgust
      case 3:
        return 'Страх'; // Fear
      case 4:
        return 'Счастливый'; // Happy
      case 5:
        return 'Нейтрально'; // Neutral
      case 6:
        return 'Грустный'; // Sad
      case 7:
        return 'Удивлённый'; // Surprise
      default:
        return 'Неизвестно'; // Unknown
    }
  };
  
  const getColorForState = (state: number) => {
    switch (state) {
        case 0:
            return "cyan";
        case 1:
            return "geekblue";
        case 2:
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
        <CommonTable.Cell></CommonTable.Cell>
          <CommonTable.Cell>Фамилия</CommonTable.Cell>
          <CommonTable.Cell>Имя</CommonTable.Cell>
          <CommonTable.Cell>Класс</CommonTable.Cell>
          <CommonTable.Cell>Состояние</CommonTable.Cell>
          <CommonTable.Cell>Учеба</CommonTable.Cell>
          <CommonTable.Cell>Настроение</CommonTable.Cell>
        </CommonTable.Header>
        {isLoading && <CommonTable.LoadingIndicator />}
        {!isLoading && hasError && <CommonTable.ErrorPlaceholder />}
        {!isLoading && !hasError && students.length === 0 && (
          <CommonTable.EmptyPlaceholder />
        )} 
        {!isLoading &&
          !hasError &&
          students.map((student) => (
            <CommonTable.Row key={student.lastName} className={styles.row}>
              <CommonTable.Cell className={styles.surname}><img src={student.photoUrl} width={50} height={50}/></CommonTable.Cell>
              <CommonTable.Cell className={styles.surname}>{student.lastName}</CommonTable.Cell>
              <CommonTable.Cell className={styles.name}>{student.firstName}</CommonTable.Cell>
              <CommonTable.Cell>{student.class}</CommonTable.Cell>
              <CommonTable.Cell>
                <Tag color={getColorForState(student.overallHealth)}>{getStateLabel(student.overallHealth)}</Tag>
              </CommonTable.Cell>
              <CommonTable.Cell>
                <Tag color={getColorForState(student.overallKundelik)}>{getStateLabel(student.overallKundelik)}</Tag>
              </CommonTable.Cell>
              <CommonTable.Cell>
                <Tag color={getColorForState(student.overallMood)}>{getStateLabel(student.overallMood)}</Tag>
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
