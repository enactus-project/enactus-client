import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/store';
import { setUser, setAuth } from '@/store/slices/auth-slice';
import { AuthRepository } from '../../data/auth.repository';
import LoginForm from './components/login-form';
import styles from './login-view.module.css';

const authRepository = new AuthRepository();

const LoginView = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [submitLoading, setSubmitLoading] = useState(false);

  const handleFormSubmit = async (payload: {
    email: string;
    password: string;
  }) => {
    setSubmitLoading(true);

    try {
      const [user, auth] = await authRepository.signIn(payload);
      dispatch(setUser(user));
      dispatch(setAuth(auth));

      navigate('/medblock');
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <LoginForm submitLoading={submitLoading} onSubmit={handleFormSubmit} />
    </div>
  );
};

export default LoginView;
