import { User } from 'src/app/shared/models/user';

export interface State {
  user: User;
  isAuthenticated: boolean;
}

export const initialState: State = {
  user: null,
  isAuthenticated: false
};
