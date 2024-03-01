import { message } from 'antd';
import { MessageInstance } from 'antd/es/message/interface';

let messageApi: MessageInstance | null = null;
let contextHolder: React.ReactElement | null = null;

export const useMessage = () => {
  if (!messageApi || !contextHolder) {
    const data = message.useMessage();

    messageApi = data[0];
    contextHolder = data[1];
  }

  return messageApi;
};

export const useContextHolder = () => {
  if (!messageApi || !contextHolder) {
    const data = message.useMessage();

    messageApi = data[0];
    contextHolder = data[1];
  }

  return contextHolder;
};
