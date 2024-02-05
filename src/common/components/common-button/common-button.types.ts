export interface CommonButtonProps {
  children?: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  loading?: boolean;
  htmlType?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  onClick?: () => void;
}
