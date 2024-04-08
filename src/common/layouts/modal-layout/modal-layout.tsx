import { Outlet } from 'react-router-dom';
import { useContextHolder } from '@/common/hooks/use-modal';

const ModalLayout = () => {
  const contextHolder = useContextHolder();

  return (
    <>
      {contextHolder}
      <Outlet />
    </>
  );
};

export default ModalLayout;
