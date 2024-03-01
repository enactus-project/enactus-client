import { User, Auth } from '@/common/entities';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

interface AuthState {
  auth: Auth | null;
  user: User | null;
}

const authKey = 'auth';

const setAuthIntoLocalStorage = (auth: Auth) => {
  localStorage.setItem(authKey, JSON.stringify(auth));
};

const getAuthFromLocalStorage = (): Auth | null => {
  const auth = localStorage.getItem(authKey);
  return auth ? JSON.parse(auth) : null;
};

const removeAuthFromLocalStorage = () => {
  localStorage.removeItem(authKey);
};

const userKey = 'user';

const setUserIntoLocalStorage = (user: User) => {
  localStorage.setItem(userKey, JSON.stringify(user));
};

const getUserFromLocalStorage = (): User | null => {
  const user = localStorage.getItem(userKey);
  return user ? JSON.parse(user) : null;
};

const removeUserFromLocalStorage = () => {
  localStorage.removeItem(userKey);
};

const initialState: AuthState = {
  auth: getAuthFromLocalStorage(),
  user: getUserFromLocalStorage(),
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<Auth>) {
      state.auth = action.payload;
      setAuthIntoLocalStorage(action.payload);
    },
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
      console.log(action.payload)
      setUserIntoLocalStorage(action.payload);
    },
    unsetAuth(state) {
      state.auth = null;
      removeAuthFromLocalStorage();
    },
    unsetUser(state) {
      state.user = null;
      removeUserFromLocalStorage();
    },
  },
});

export const { setAuth, setUser, unsetAuth, unsetUser } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth.auth;
export const selectUser = (state: RootState) => state.auth.user;
