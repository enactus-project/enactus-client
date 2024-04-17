import { Button, Form, Input } from 'antd';
import styles from './login-form.module.css';

interface Props {
  submitLoading?: boolean;
  onSubmit?: (values: FormData) => void;
}

interface FormData {
  email: string;
  password: string;
}

const LoginForm = ({ submitLoading = false, onSubmit = () => ({}) }: Props) => {
  return (
    <Form layout="vertical" className={styles.wrapper} onFinish={onSubmit}>
 
      <h3 className={styles.title}>Вход</h3>
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
          Войти
        </Button>
      </div>
    </Form>
  );
};

export default LoginForm;
