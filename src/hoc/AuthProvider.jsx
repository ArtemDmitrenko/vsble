import { createContext, useState } from 'react';

import { useMutation } from '@apollo/client';
import { LOGIN, LOGOUT } from 'query/auth';

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const setDefaultRole = () => {
    const role = localStorage.getItem('authRole');
    return role ? role : null;
  };

  const setDefaultAuth = () => {
    return localStorage.getItem('authRole');
  };

  const [auth, setAuth] = useState(setDefaultAuth);
  const [role, setRole] = useState(setDefaultRole);
  const [authError, setAuthError] = useState(null);

  const [loginUser] = useMutation(LOGIN);
  const [logout, { client }] = useMutation(LOGOUT);

  const signIn = async (login, password) => {
    const user = await loginUser({
      variables: {
        login,
        password,
      },
    });
    const {
      data: {
        login: { success, errors, data },
      },
    } = user;
    if (success) {
      const { role } = data;
      setAuth(true);
      setAuthError('');
      setRole(role);
      localStorage.setItem('authRole', role);
    } else {
      const { _error: errorText } = errors;
      setAuthError(errorText);
      setAuth(false);
      setRole(null);
      localStorage.removeItem('authRole');
    }
  };

  const signOut = async () => {
    setAuth(false);
    setRole(null);
    await logout();
    await client.clearStore();
    localStorage.removeItem('authRole');
  };

  const value = {
    user: { isAuth: auth, authRole: role, authError },
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
