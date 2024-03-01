import styles from './common-page.module.css';

interface Props {
  children?: React.ReactNode;
}

const CommonPageTitle = ({ children }: Props) => {
  return <h1 className={styles.title}>{children}</h1>;
};

export default CommonPageTitle;
