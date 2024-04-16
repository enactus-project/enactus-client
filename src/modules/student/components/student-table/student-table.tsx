import { Tag } from 'antd';
import { PaginationMeta } from '@/common/entities';
import { Student, StudentData } from '@/common/entities/student';
import CommonTable from '@/common/components/common-table';
import styles from './student-table.module.css';

interface Props {
  student: Student;
  isLoading?: boolean;
  hasError?: boolean;
  paginationMeta?: PaginationMeta;
  onPageChange?: (page: number) => void;
}

const StudentTable = ({
  student,
  isLoading = false,
  hasError = false,
  paginationMeta,
  onPageChange = () => ({}),
}: Props) => {

  const demoStudents: StudentData[] = [
    {
      studentId: '47dee995-aafb-4177-b6eb-5940086cb446',
      academic: 85,
      is_absent: false,
      date: '2022-04-01',
      grade: '11G',
    },
    {
      studentId: '47dee995-aafb-4177-b6eb-5940086cb446',
      academic: 75,
      is_absent: true,
      date: '2022-04-02',
      grade: '11G',
      reason_for_absent: 'Плохое самоучствие',
    },
    {
      studentId: '47dee995-aafb-4177-b6eb-5940086cb446',
      academic: 90,
      is_absent: false,
      date: '2022-04-03',
      grade: '11G',
    },
    {
      studentId: '47dee995-aafb-4177-b6eb-5940086cb446',
      academic: 80,
      is_absent: true,
      date: '2022-04-04',
      grade: '11G',
      reason_for_absent: 'Семейные обстоятельства',
    },
  ];

  const getAcademic = (academic?: number) => {
    if(academic && academic > 85){
        return "Отличная"
    }
    else if (academic && academic > 65 && academic <85) {
      return "Хорошая"
    }
    else if (academic && academic < 64){
      return "Удолетворительная"
    }
    else{
      return "Нет данных"
    }
  }

  const getAcademicColor = (academic?: number) => {
    if(academic && academic > 85){
        return "green"
    }
    else if (academic && academic > 65 && academic <85) {
      return "yellow"
    }
    else if (academic && academic < 64){
      return "red"
    }

  }
  
  const getIsAbsent = (is_absent?: boolean) => {
    switch (is_absent) {
      case false:
        return "Да";
      case true:
        return 'Нет';
      default:
        return 'Неизвестно';
    }
  };
  const getColorForState = (state?: boolean) => {
    switch (state) {
        case false:
            return "green";
        case true:
            return "red";
        default:
            return "black"; // Default color if state doesn't match any specific case
    }
  } 

  return (
    <div className={styles.wrapper}>
      <CommonTable>
        <CommonTable.Header className={styles.row}>
          <CommonTable.Cell>ID</CommonTable.Cell>
          <CommonTable.Cell>Дата</CommonTable.Cell>
          <CommonTable.Cell>Успеваемость</CommonTable.Cell>
          <CommonTable.Cell>Класс</CommonTable.Cell>
          <CommonTable.Cell>Присутствие</CommonTable.Cell>
          <CommonTable.Cell>Причины отсутствия</CommonTable.Cell>
        </CommonTable.Header>
        {isLoading && <CommonTable.LoadingIndicator />}
        {!isLoading && hasError && <CommonTable.ErrorPlaceholder />}
        {/* {!isLoading && !hasError && students.length === 0 && (
          <CommonTable.EmptyPlaceholder />
        )}  */}
        {!isLoading &&
          !hasError &&          demoStudents.map((student) => (
            <CommonTable.Row key={student.studentId} className={styles.row}>
              <CommonTable.IdCell id={student.studentId} link="/medblock"/>
              <CommonTable.Cell className={styles.surname}>{student.date}</CommonTable.Cell>
              {/* <CommonTable.Cell className={styles.name}>{getAcademic(student.academic)}</CommonTable.Cell> */}
              <CommonTable.Cell>
                <Tag color={getAcademicColor(student.academic)}>{getAcademic(student.academic)}</Tag>
              </CommonTable.Cell>
              <CommonTable.Cell>{student.grade}</CommonTable.Cell>
              {/* <CommonTable.Cell>
                <Tag color={getColorForState(student.)}>{getStateLabel(student.state)}</Tag>
              </CommonTable.Cell> */}
              {/* <CommonTable.Cell>{student.description}</CommonTable.Cell> */}
              <CommonTable.Cell>
                <Tag color={getColorForState(student.is_absent)}>{getIsAbsent(student.is_absent)}</Tag>
              </CommonTable.Cell>
              <CommonTable.Cell>{student.reason_for_absent}</CommonTable.Cell>
            </CommonTable.Row>
          ))

          
        }
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

export default StudentTable;
