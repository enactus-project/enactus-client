import { Tag } from 'antd';

import { PaginationMeta } from '@/common/entities';
import CommonTable from '@/common/components/common-table';
import styles from './danger-moods-table.module.css'
import { DangerMood } from '@/common/entities/danger-mood';

interface Props {
  danger_moods?: DangerMood[];
  isLoading?: boolean;
  hasError?: boolean;
  paginationMeta?: PaginationMeta;
  onPageChange?: (page: number) => void;
}

const DangerMoodsTable = ({
  danger_moods = [],
  isLoading = false,
  hasError = false,
  paginationMeta,
  onPageChange = () => ({}),
}: Props) => {
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
          <CommonTable.Cell>Id камеры</CommonTable.Cell>
          <CommonTable.Cell>Вид угрозы</CommonTable.Cell>
          <CommonTable.Cell>Дата</CommonTable.Cell>
          <CommonTable.Cell>Отправлено</CommonTable.Cell>
        </CommonTable.Header>
        {isLoading && <CommonTable.LoadingIndicator />}
        {!isLoading && hasError && <CommonTable.ErrorPlaceholder />}
        {!isLoading && !hasError && danger_moods.length === 0 && (
          <CommonTable.EmptyPlaceholder />
        )} 
        {!isLoading &&
          !hasError &&
          danger_moods.map((danger_mood) => (
            <CommonTable.Row key={danger_mood.id} className={styles.row}>
              <CommonTable.Cell className={styles.surname}>{danger_mood.id}</CommonTable.Cell>
              <CommonTable.Cell className={styles.name}>{danger_mood.camera_id}</CommonTable.Cell>

              <CommonTable.Cell>
                <Tag color={getColorForState(danger_mood.threat_type)}>Харассмент</Tag>
              </CommonTable.Cell>
              <CommonTable.Cell>{danger_mood.timestamp}</CommonTable.Cell>
              <CommonTable.Cell>Да</CommonTable.Cell>
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

export default DangerMoodsTable;
