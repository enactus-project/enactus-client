import { User } from '@/common/entities';

export interface HeaderProps {
  user?: User | null;
  onLogout?: () => void;
}
