export interface State {
  isAuthenticated: boolean;
  isAdmin: boolean;
  loginErrors: any[];
  registerErrors: any[];
}

export const initialState: State = {
  isAuthenticated: false,
  isAdmin: false,
  loginErrors: null,
  registerErrors: null,
};
