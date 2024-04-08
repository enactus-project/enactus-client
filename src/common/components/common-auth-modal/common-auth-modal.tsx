import { CommonModal } from '../common-modal';
import styles from './common-auth-modal.module.css'
import { CommonAuthModalProps } from './common-auth-modal.types';
import LoginForm from '@/modules/auth/views/login-view/components/login-form';

export const CommonAuthModal = ({
  isOpen = false,
  onClose,
}: CommonAuthModalProps) => (
  <CommonModal isOpen={isOpen} onClose={onClose} title="">
    <div className={styles.content}>
        {/* <LoginForm/> */}
    </div>
  </CommonModal>
);
