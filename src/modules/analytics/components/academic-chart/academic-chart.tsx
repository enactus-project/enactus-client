import { MetricCount } from '@/common/entities/metric-count';
import MetricsBarChart from '../metrics-bar-chart';

const AcademicChart = () => {
//   const [answersMetrics, setAnswersMetrics] = useState<MetricCount[]>([]);
//   const [isAnswersMetricsLoading, setIsAnswersMetricsLoading] = useState(true);
//   const [hasAnswersMetricsError, setHasAnswersMetricsError] = useState(false);

//   useEffect(() => {
//     loadAnswersMetrics();
//   }, []);

//   const loadAnswersMetrics = async () => {
//     setHasAnswersMetricsError(false);
//     setIsAnswersMetricsLoading(true);

//     try {
//       const answersMetrics = await metricsRepository.getAnswersMetrics();
//       setAnswersMetrics(answersMetrics);
//     } catch {
//       setHasAnswersMetricsError(true);
//     } finally {
//       setIsAnswersMetricsLoading(false);
//     }
//   };

const academicMetrics: MetricCount[] = [
    { date: '2024-03-15', count: 50 },
    { date: '2024-03-16', count: 55 },
    { date: '2024-03-17', count: 45 },
    { date: '2024-03-18', count: 50 },
    { date: '2024-03-19', count: 50 },
    { date: '2024-03-20', count: 55 },
    { date: '2024-03-21', count: 50 },
    { date: '2024-03-22', count: 55 },
    { date: '2024-03-23', count: 50 },
    { date: '2024-03-24', count: 50 },
    { date: '2024-03-25', count: 50 },
    { date: '2024-03-26', count: 50 },
    { date: '2024-03-27', count: 50 },
    { date: '2024-03-28', count: 45 },
    { date: '2024-03-29', count: 30 },
    { date: '2024-03-30', count: 35 },
    { date: '2024-03-31', count: 20 },
    { date: '2024-04-01', count: 35 },
    { date: '2024-04-02', count: 30 },
    { date: '2024-04-03', count: 25 },
    { date: '2024-04-04', count: 40 },
    { date: '2024-04-05', count: 35 },
    { date: '2024-04-06', count: 50 },
    { date: '2024-04-07', count: 55 },
    { date: '2024-04-08', count: 60 },
    { date: '2024-04-09', count: 35 },
    { date: '2024-04-10', count: 40 },
    { date: '2024-04-11', count: 55 },
    { date: '2024-04-12', count: 50 },
    { date: '2024-04-13', count: 25 },
    { date: '2024-04-14', count: 30 },
  ];

  return (
    <MetricsBarChart
      title="Тенденция на протяжении месяца"
      data={academicMetrics}
    />
  );
};

export default AcademicChart;
