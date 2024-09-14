import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/store';
import { selectUser, selectAuth } from '@/store/slices/auth-slice';

const AuthGuardLayout = () => {
  const navigate = useNavigate();
  const auth = useAppSelector(selectAuth);
  const user = useAppSelector(selectUser);

  useEffect(() => {
    if (!auth || !user) {
      navigate('/', {
        replace: true,
      });
    }
  }, [auth, user]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthGuardLayout;
