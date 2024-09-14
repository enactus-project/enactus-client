import { useEffect, useState } from 'react';
import { useUnauthorizedHandler } from '@/common/api/hooks/use-unauthorized-handler';
import styles from './basic-moods.module.css'
import { BasicMoodsRepository } from '../data/basic-moods.repository';
import { PaginationMeta } from '@/common/entities/pagination-meta';
import BasicMoodsTable from '../components/basic-moods-table';
import { BasicMood } from '@/common/entities/basic-mood';

const ListBasicMoodsView = () => {
  const unauthorizedHandler = useUnauthorizedHandler();
  
  const [basicModels, setBasicModels] = useState<BasicMood[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [paginationMeta] = useState<PaginationMeta>({
    page: 1,
    perPage: 20,
    total: 0,
  })
  const basicModelsRepository = new BasicMoodsRepository();

  useEffect(() => {
    loadBasicModels();
  }, []);

  const loadBasicModels = async () => {
    setHasError(false);
    setIsLoading(true);

    try {
      const fetchedBasicModels = await unauthorizedHandler(basicModelsRepository.getMoods());
      setBasicModels(fetchedBasicModels);
      console.log(fetchedBasicModels, "FROM LIST BASIC MODELS");
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.controls}>
      </div>

      <div className={styles.content}>
        <BasicMoodsTable
          basic_moods={basicModels}
          paginationMeta={paginationMeta}
          isLoading={isLoading}
          hasError={hasError}
          onPageChange={loadBasicModels} // Implement pagination handling if needed
        />
      </div>

    </div>
  );
};

export default ListBasicMoodsView;
