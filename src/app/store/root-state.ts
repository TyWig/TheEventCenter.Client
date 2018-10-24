import { userState } from './user-store';
import { authState } from './auth-store';

export interface State {
  user: userState.State;
  auth: authState.State;
}
