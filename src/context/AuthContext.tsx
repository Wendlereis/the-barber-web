import React, { useCallback } from "react";
import { createContext } from "react";

import api from "../services/apiClient";

interface SignInCredencials {
  email: string;
  password: string;
}

interface AuthContext {
  name: string;
  signIn(credentials: SignInCredencials): Promise<void>;
}

const AuthContext = createContext<AuthContext>({} as AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("/sessions", { email, password });
    console.log(response.data);
  }, []);

  return (
    <AuthContext.Provider value={{ name: "", signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
