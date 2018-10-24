import { User } from 'src/app/shared/models/user';

export interface State {
  user: User;
}

export const initialState: State = {
  user: null,
};
