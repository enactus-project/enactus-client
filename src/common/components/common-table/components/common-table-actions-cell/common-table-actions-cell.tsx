import classNames from 'classnames';
import { Dropdown, MenuProps } from 'antd';
import CommonTableCell from '../common-table-cell';
import styles from './common-table-actions-cell.module.css';

interface Props {
  disabled?: boolean;
  isDeleteEnabled?: boolean;
  isPublishEnabled?: boolean;
  isHideEnabled?: boolean;
  isEditEnabled?: boolean;
  onDelete?: () => void;
  onPublish?: () => void;
  onHide?: () => void;
  onEdit?: () => void;
}

const CommonTableActionsCell = ({
  disabled = false,
  isDeleteEnabled,
  isPublishEnabled,
  isHideEnabled,
  isEditEnabled,
  onDelete,
  onPublish,
  onHide,
  onEdit,
}: Props) => {
  const items: MenuProps['items'] = [];

  if (isPublishEnabled) {
    items.push({
      key: 'publish',
      label: (
        <span className={styles.publishButton} onClick={onPublish}>
          <i className={classNames('bx bx-upload', styles.icon)} />
          Опубликовать
        </span>
      ),
    });
  }

  if (isHideEnabled) {
    items.push({
      key: 'hide',
      label: (
        <span className={styles.hideButton} onClick={onHide}>
          <i className={classNames('bx bx-download', styles.icon)} />
          Скрыть
        </span>
      ),
    });
  }

  if (isEditEnabled) {
    items.push({
      key: 'edit',
      label: (
        <span className={styles.editButton} onClick={onEdit}>
          <i className={classNames('bx bx-edit', styles.icon)} />
          Изменить
        </span>
      ),
    });
  }

  if (isDeleteEnabled) {
    items.push({
      key: 'delete',
      label: (
        <span className={styles.deleteButton} onClick={onDelete}>
          <i className={classNames('bx bx-trash', styles.icon)} />
          Удалить
        </span>
      ),
    });
  }

  return (
    <CommonTableCell className={styles.wrapper}>
      {!disabled && (
        <Dropdown menu={{ items }}>
          <i
            className={classNames(
              'bx bx-dots-horizontal-rounded',
              styles.actionsIcon,
            )}
          />
        </Dropdown>
      )}
    </CommonTableCell>
  );
};

export default CommonTableActionsCell;
