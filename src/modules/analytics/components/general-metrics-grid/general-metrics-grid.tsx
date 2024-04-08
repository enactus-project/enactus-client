import { formatIntegerNumber } from '@/common/utils';

import MetricCard from '../metric-card';
import styles from './general-metrics-grid.module.css';

interface GeneralMetricsGridProps {
  isLoading?: boolean;
  //generalMetrics?: GeneralMetrics | null;
}

const GeneralMetricsGrid = ({
  isLoading = false,
}: GeneralMetricsGridProps) => {
  return (
    <div className={styles.grid}>
      <MetricCard
        label="Кол-во учеников"
        value={
          80 &&
          formatIntegerNumber(80)
        }
        isLoading={isLoading}
      />
      <MetricCard
        label="Статус `хороший` "
        value={
          60 &&
          formatIntegerNumber(60)
        }
        isLoading={isLoading}
      />
      <MetricCard
        label="Статус `средний`"
        value={
          30 &&
          formatIntegerNumber(30)
        }
        isLoading={isLoading}
      />
      <MetricCard
        label="Статус `сложный`"
        value={
          50 &&
          formatIntegerNumber(50)
        }
        isLoading={isLoading}
      />
    </div>
  );
};

export default GeneralMetricsGrid;
