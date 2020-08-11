import React, { useCallback, useState, useContext } from "react";
import { createContext } from "react";

import api from "../services/apiClient";

interface SignInCredencials {
  email: string;
  password: string;
}

interface AuthState {
  token: string;
  user: object;
}

interface AuthContext {
  user: object;
  signIn(credentials: SignInCredencials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContext>({} as AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("@TheBarber:token");
    const user = localStorage.getItem("@TheBarber:user");

    return token && user
      ? { token, user: JSON.parse(user) }
      : ({} as AuthState);
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("/sessions", { email, password });

    const { token, user } = response.data;

    localStorage.setItem("@TheBarber:token", token);
    localStorage.setItem("@TheBarber:user", JSON.stringify(user));

    setData({ user, token });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@TheBarber:token");
    localStorage.removeItem("@TheBarber:user");

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  } else {
    return context;
  }
};
