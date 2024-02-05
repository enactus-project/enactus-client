import classNames from 'classnames';
import { MouseEventHandler, useRef } from 'react';

import styles from './common-modal.module.css';
import { CommonModalProps } from './common-modal.types';

export const CommonModal = ({
  children,
  isOpen,
  title,
  onClose,
}: CommonModalProps) => {
  const modalRef = useRef(null);

  const handleWrapperClick: MouseEventHandler = (event) => {
    if (event.currentTarget === event.target && onClose) {
      onClose();
    }
  };

  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.open]: isOpen,
      })}
      onClick={handleWrapperClick}
    >
      <div className={styles.modal} ref={modalRef}>
        <header className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <button className={styles.closeButton} onClick={onClose}>
            <img alt="Закрыть" className={styles.closeIcon} src="/close.svg" />
          </button>
        </header>
        <div>{children}</div>
      </div>
    </div>
  );
};
