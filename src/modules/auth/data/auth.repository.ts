import {
  UserResponse,
  AuthResponse,
  mapUserResponseToUser,
  mapAuthResponseToAuth,
  request,
} from '@/common/api';
import { User, Auth } from '@/common/entities';

export class AuthRepository {
  async getTokensAndUser({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<[User, Auth]> {
    const response = await request.post('/v1/auth/tokens', {
      email,
      password,
    });
    console.log(response, 'Response')
    const user = response.data.data.user as UserResponse;
    const auth = response.data.data.auth as AuthResponse;

    return [mapUserResponseToUser(user), mapAuthResponseToAuth(auth)];
  }

  async signIn({email, password} : {email: string, password: string}):Promise<[User, Auth]> {
    const response = await request.post('v1/users/signIn', {
      email,
      password
    })
    console.log(response.data, "response")
    const user = response.data.user as UserResponse;
    console.log(user, "user")
    console.log(response.data.auth)
    const auth = response.data.auth as AuthResponse; 
    return [mapUserResponseToUser(user), mapAuthResponseToAuth(auth)]

  }
}
