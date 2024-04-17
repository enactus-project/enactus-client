import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/store';
import { selectUser, selectAuth } from '@/store/slices/auth-slice';

const NonAuthGuardLayout = () => {
  const navigate = useNavigate();
  const auth = useAppSelector(selectAuth);
  const admin = useAppSelector(selectUser);

  useEffect(() => {
    if (auth && admin) {
      // check the role of user to navigate to special pages
      navigate('/medblock', {
        replace: true,
      });
    }
  }, [auth, admin]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default NonAuthGuardLayout;
