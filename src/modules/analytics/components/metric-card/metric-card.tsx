import classNames from 'classnames';
import styles from './metric-card.module.css';

interface MetricCardProps {
  label: string;
  value?: string | number | null;
  isLoading?: boolean;
}

const MetricCard = ({ label, value, isLoading = false }: MetricCardProps) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={classNames(styles.loader, { [styles.active]: isLoading })}
      />
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>{value ?? 'Ошибка'}</span>
    </div>
  );
};

export default MetricCard;
