export interface CommonModalProps {
  isOpen?: boolean;
  children?: React.ReactNode;
  title?: string;
  onClose?: () => void;
}
