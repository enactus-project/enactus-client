import { Button, Form, Input } from 'antd';
import styles from './login-form.module.css';
import classNames from 'classnames';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/store';
import { setUser, setAuth } from '@/store/slices/auth-slice';
import { AuthRepository } from '@/modules/auth/data/auth.repository';

interface Props {
  submitLoading?: boolean;
  onSubmitSignIn?: (values: FormDataSignIn) => void;
  onSubmitSignUp?: (values: FormData) => void;
}

interface FormData {
  email: string;
  password: string;
  name: string;
}

interface FormDataSignIn {
  email: string;
  password: string
}

const LoginForm = ({ submitLoading = false, onSubmitSignIn = () => ({}), onSubmitSignUp =( ) => ({}) }: Props) => {
  const [toggleState, setToggleState] = useState(1)

  const authRepository = new AuthRepository()
  const toggleTab = (index: number) => {
    setToggleState(index)
  }
  
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [submitLoadingRequest, setSubmitLoadingRequeset] = useState(false);

  const handleFormSubmit = async (payload: {
    email: string;
    password: string;
  }) => {
    setSubmitLoadingRequeset(true);
    console.log("clicked")
  

    try {
      const [user, auth] = await authRepository.signIn(payload);
      console.log(user, "USER")
      dispatch(setUser(user));
      dispatch(setAuth(auth));

      navigate('/');
    } finally {
      setSubmitLoadingRequeset(false);
    }
  };
  return (
      <div className={styles.container}>
        <div className={styles.block_tabs}>
          <div className={classNames(styles.tab, toggleState == 1 && styles.active_tab )} onClick={() => toggleTab(1)}>
            Вход
          </div>
          <div className={classNames(styles.tab, toggleState == 2 && styles.active_tab)} onClick={() => toggleTab(2)}>
            Регистрация
          </div>
        </div>
        {toggleState == 1 && (        
          <Form layout="vertical" className={styles.wrapper} onFinish={handleFormSubmit}>
            <Form.Item
              label="Почта"
              name="email"
              rules={[
                { required: true, message: 'Введите почту' },
                {
                  type: 'email',
                  message: 'Неверный формат почты',
                },
              ]}
              className={styles.fieldWrapper}
            >
              <Input placeholder="Почта" />
            </Form.Item>
            <Form.Item
              label="Пароль"
              name="password"
              rules={[{ required: true, message: 'Введите пароль' }]}
              className={styles.fieldWrapper}
            >
              <Input type="password" placeholder="Пароль" />
            </Form.Item>
            <div className={styles.footer}>
              
              <Button htmlType="submit" type="primary" loading={submitLoadingRequest}>
                Войти
              </Button>
            </div>
          </Form>
        )}
        {toggleState == 2 && (
          <Form layout="vertical" className={styles.wrapper} onFinish={onSubmitSignUp}>
              <Form.Item
                label="Имя"
                name="name"
                rules={[
                  { required: true, message: 'Введите имя' },
                ]}
                className={styles.fieldWrapper}
              >
                <Input placeholder="Имя" />
              </Form.Item>
              <Form.Item
                label="Почта"
                name="email"
                rules={[
                  { required: true, message: 'Введите почту' },
                  {
                    type: 'email',
                    message: 'Неверный формат почты',
                  },
                ]}
                className={styles.fieldWrapper}
              >
                <Input placeholder="Почта" />
              </Form.Item>
              <Form.Item
                label="Пароль"
                name="password"
                rules={[{ required: true, message: 'Введите пароль' }]}
                className={styles.fieldWrapper}
              >
                <Input type="password" placeholder="Пароль" />
              </Form.Item>

              <div className={styles.footer}>
                
                <Button htmlType="submit" type="primary" loading={submitLoading}>
                  Зарегистрироваться
                </Button>
            </div>
          </Form>
        )}
      </div>
  );
};

export default LoginForm;
