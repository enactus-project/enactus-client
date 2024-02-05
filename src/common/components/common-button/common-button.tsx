import { Button } from 'antd';
import classNames from 'classnames';

import styles from './common-button.module.css';
import { CommonButtonProps } from './common-button.types';

export const CommonButton = ({
  children,
  className,
  fullWidth,
  loading,
  htmlType,
  icon,
  onClick,
}: CommonButtonProps) => (
  <Button
    className={classNames(
      styles.button,
      {
        [styles.fullWidth]: fullWidth,
      },
      className,
    )}
    htmlType={htmlType}
    icon={icon}
    loading={loading}
    onClick={onClick}
    type="primary"
  >
    {children}
  </Button>
);
