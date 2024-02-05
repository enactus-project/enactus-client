import { User } from '@/common/entities';

export interface HeaderAvatarProps {
  user?: User | null;
  onLogout?: () => void;
}
