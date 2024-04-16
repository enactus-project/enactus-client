import { Button, Form, Input, Modal } from 'antd';
import styles from './edit-description-modal.module.css';

interface Payload {
  name: string;
  surname: string;
  description: string;
  state: number;
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

const EditDescriptionModal = ({
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
          initialValue={initialData?.name}
          label="Имя"
          name="name"
          rules={[
            { required: true, message: 'Введите название' },
            { max: 255, message: 'Слишком много символов' },
          ]}
          className={styles.fieldWrapper}
        >
          <Input placeholder="Причина ухода..." />
        </Form.Item>
        <Form.Item
          initialValue={initialData?.name}
          label="Фамилия"
          name="surname"
          rules={[
            { required: true, message: 'Введите название' },
            { max: 255, message: 'Слишком много символов' },
          ]}
          className={styles.fieldWrapper}
        >
          <Input placeholder="Причина ухода..." />
        </Form.Item>
        <Form.Item
          initialValue={initialData?.name}
          label="Класс"
          name="grade"
          rules={[
            { required: true, message: 'Введите класс' },
            { max: 255, message: 'Слишком много символов' },
          ]}
          className={styles.fieldWrapper}
        >
          <Input placeholder="Класс..." />
        </Form.Item>
        <Form.Item
          initialValue={initialData?.name}
          label="state"
          name="state"
          rules={[
            { required: true, message: 'Введите название' },
            { max: 2, message: 'Слишком много символов' },
          ]}
          className={styles.fieldWrapper}
        >
          <Input placeholder="Причина ухода..." type="number" />
        </Form.Item>
        <Form.Item
          initialValue={initialData?.name}
          label="Причниа ухода"
          name="description"
          rules={[
            { required: true, message: 'Введите название' },
            { max: 255, message: 'Слишком много символов' },
          ]}
          className={styles.fieldWrapper}
        >
          <Input placeholder="Причина ухода..." />
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

export default EditDescriptionModal;
