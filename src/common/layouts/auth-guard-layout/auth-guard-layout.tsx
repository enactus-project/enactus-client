import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/store';
import { selectUser, selectAuth } from '@/store/slices/auth-slice';
import { useMessage } from '@/common/hooks/use-message';

const AuthGuardLayout = () => {
  const navigate = useNavigate();
  const message = useMessage();
  const auth = useAppSelector(selectAuth);
  const user = useAppSelector(selectUser);

  useEffect(() => {
    if (!auth || !user) {
      navigate('/', {
        replace: true,
      });

      message.info('Необходимо войти');
    }
  }, [auth, user]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthGuardLayout;
