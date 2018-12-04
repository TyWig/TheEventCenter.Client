import { userState } from './user-store';
import { authState } from './auth-store';
import { adminState } from './admin-store';

export interface State {
  user: userState.State;
  auth: authState.State;
  admin: adminState.State;
}
