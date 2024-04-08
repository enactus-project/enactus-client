import { Modal } from 'antd';
import { HookAPI } from 'antd/es/modal/useModal';

let modal: HookAPI | null = null;
let contextHolder: React.ReactElement | null = null;

export const useModal = () => {
  if (!modal || !contextHolder) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const data = Modal.useModal();

    modal = data[0];
    contextHolder = data[1];
  }

  return modal;
};

export const useContextHolder = () => {
  if (!modal || !contextHolder) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const data = Modal.useModal();

    modal = data[0];
    contextHolder = data[1];
  }

  return contextHolder;
};
