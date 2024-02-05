import classNames from 'classnames';

import { CommonBoxIconProps } from './common-box-icon.types';

export const CommonBoxIcon = ({ name, className }: CommonBoxIconProps) => (
  <i className={classNames(name, className)} />
);
