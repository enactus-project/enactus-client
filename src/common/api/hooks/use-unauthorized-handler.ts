import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/store';
import { HttpStatus } from '@/common/constants/http-status';
import { unsetUser, unsetAuth } from '@/store/slices/auth-slice';

export const useUnauthorizedHandler = () => {
 
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  return async <T>(request: Promise<T>) => {
    try {
      return await request;
    } catch (e) {
      const error = e as AxiosError;

      if (error?.response?.status === HttpStatus.Unauthorized) {
        dispatch(unsetAuth());
        dispatch(unsetUser());
        navigate('/');
      }

      throw e;
    }
  };
};
