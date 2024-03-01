import { Auth } from '@/common/entities/auth';
import { AuthResponse } from '../responses/auth.response';

export const mapAuthResponseToAuth = (response: AuthResponse): Auth => ({
  access: {
    token: response.token,
    expiresAt: response.expires_at,
  },
});
