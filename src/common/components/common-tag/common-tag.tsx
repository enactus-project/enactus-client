import styles from './common-tag.module.css';

interface Props {
  children?: React.ReactNode;
}

const CommonTag = ({ children }: Props) => {
  return (
    <div className={styles.tag}>
      <div className={styles.background} />
      {children}
    </div>
  );
};

export default CommonTag;
