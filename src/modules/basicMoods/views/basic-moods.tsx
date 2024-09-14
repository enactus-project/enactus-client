import { useEffect, useState } from 'react';
import { useUnauthorizedHandler } from '@/common/api/hooks/use-unauthorized-handler';
import CommonPageTitle from '@/common/components/common-page-title';
import styles from './basic-moods.module.css'
import { BasicMoodsRepository } from '../data/basic-moods.repository';
import { Button, message } from 'antd';
import { PaginationMeta } from '@/common/entities/pagination-meta';
import { PlusCircleOutlined } from '@ant-design/icons';
import BasicMoodsTable from '../components/basic-moods-table';
import { BasicMood } from '@/common/entities/basic-mood';

const ListBasicMoodsView = () => {
  const unauthorizedHandler = useUnauthorizedHandler();
  
  const [basicModels, setBasicModels] = useState<BasicMood[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [paginationMeta, setPaginationMeta] = useState<PaginationMeta>({
    page: 1,
    perPage: 20,
    total: 0,
  });
  const [isCreateBasicModelModalVisible, setIsCreateBasicModelModalVisible] = useState<boolean>(false);
  const [isCreateBasicModelModalSubmitLoading, setIsCreateBasicModelModalSubmitLoading] = useState<boolean>(false);
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

  const handleAddBasicModelClick = () => {
    setIsCreateBasicModelModalVisible(true);
  };

  const handleCreateBasicModelModalClose = () => {
    setIsCreateBasicModelModalVisible(false);
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
