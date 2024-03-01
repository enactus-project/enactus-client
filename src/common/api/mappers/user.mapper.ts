import { User } from '@/common/entities/user';
import { UserResponse } from '../responses/user.response';

export const mapUserResponseToUser = (payload: UserResponse): User => ({
  id: payload.id,
  role: payload.role,
  name: payload.name,
  email: payload.email,
  createdAt: payload.createdAt,
  updatedAt: payload.updatedAt,
  deletedAt: payload.deletedAt,
});
