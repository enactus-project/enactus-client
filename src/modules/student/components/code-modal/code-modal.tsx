import { Button, Form, Input, Modal } from 'antd';
import styles from './code-modal.module.css'

interface Payload {
   code: string
}

interface Props {
  title: string;
  initialData?: Payload;
  visible?: boolean;
  submitLoading?: boolean;
  submitText?: string;
  onSubmit?: (payload: Payload) => void;
  onCancel?: () => void;
}

const CodeModal = ({
  title,
  initialData,
  visible = false,
  submitLoading = false,
  submitText = 'Подтвердить',
  onSubmit,
  onCancel,
}: Props) => {
  return (
    <Modal
      open={visible}
      title={title}
      footer={null}
      destroyOnClose
      className={styles.wrapper}
      onCancel={onCancel}
    >
      <Form layout="vertical" className={styles.wrapper} onFinish={onSubmit}>
        <Form.Item
          label="Код"
          name="code"
          rules={[
            { required: true, message: 'Введите код' }
          ]}
          className={styles.fieldWrapper}
        >
          <Input placeholder="Код доступа" />
        </Form.Item>
        <div className={styles.footer}>
          <Button htmlType="submit" type="primary" loading={submitLoading}>
            {submitText}
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default CodeModal;
