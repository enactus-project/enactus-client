import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { MetricCount } from '@/common/entities/metric-count';
import CommonLoadingIndicator from '@/common/components/common-loading-indicator';
import CommonErrorPlaceholder from '@/common/components/common-error-placeholder';
import styles from './metrics-bar-chart.module.css';

interface MetricsBarChartProps {
  title: string;
  data?: MetricCount[];
  isLoading?: boolean;
  hasError?: boolean;
}

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      border: { dash: [4, 4] },
    },
    x: {
      border: { dash: [4, 4] },
    },
  },
};

const MetricsBarChart = ({
  title,
  data = [],
  isLoading = false,
  hasError = false,
}: MetricsBarChartProps) => {
  const labels = data.map((metric) => metric.date);

  const chartData = {
    labels,
    datasets: [
      {
        label: title,
        data: data.map((metric) => metric.count),
        backgroundColor: '#074173',
      },
    ],
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>
        {isLoading && <CommonLoadingIndicator />}
        {!isLoading && hasError && <CommonErrorPlaceholder />}
        {!isLoading && !hasError && <Bar options={options} data={chartData} />}
      </div>
    </div>
  );
};

export default MetricsBarChart;
