import React from "react";

import GlobalStyles from "./styles/Global";

import { AuthProvider } from "./hooks/AuthContext";
import { ToastProvider } from "./hooks/ToastContext";

import Routes from "./routes";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ToastProvider>
        <Routes />
        <GlobalStyles />
      </ToastProvider>
    </AuthProvider>
  );
};

export default App;
