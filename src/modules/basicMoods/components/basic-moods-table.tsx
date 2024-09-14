import { Tag } from 'antd';

import { PaginationMeta } from '@/common/entities';
import CommonTable from '@/common/components/common-table';
import styles from './basic-moods-table.module.css'
import { BasicMood } from '@/common/entities/basic-mood';

interface Props {
  basic_moods?: BasicMood[];
  isLoading?: boolean;
  hasError?: boolean;
  paginationMeta?: PaginationMeta;
  onPageChange?: (page: number) => void;
}

const BasicMoodsTable = ({
  basic_moods = [],
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

  return (
    <div className={styles.wrapper}>
      <CommonTable>
        <CommonTable.Header className={styles.row}>
          <CommonTable.Cell>Id</CommonTable.Cell>
          <CommonTable.Cell>Id ученика</CommonTable.Cell>
          <CommonTable.Cell>Настроение</CommonTable.Cell>
          <CommonTable.Cell>Дата</CommonTable.Cell>
        </CommonTable.Header>
        {isLoading && <CommonTable.LoadingIndicator />}
        {!isLoading && hasError && <CommonTable.ErrorPlaceholder />}
        {!isLoading && !hasError && basic_moods.length === 0 && (
          <CommonTable.EmptyPlaceholder />
        )} 
        {!isLoading &&
          !hasError &&
          basic_moods.map((basic_mood) => (
            <CommonTable.Row key={basic_mood.id} className={styles.row}>
              <CommonTable.Cell className={styles.surname}>{basic_mood.id}</CommonTable.Cell>
              <CommonTable.Cell className={styles.name}>{basic_mood.student_id}</CommonTable.Cell>

              <CommonTable.Cell>
                <Tag color={getColorForState(basic_mood.mood)}>{getStateLabel(basic_mood.mood)}</Tag>
              </CommonTable.Cell>
              <CommonTable.Cell>{basic_mood.timestamp}</CommonTable.Cell>
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

export default BasicMoodsTable;
