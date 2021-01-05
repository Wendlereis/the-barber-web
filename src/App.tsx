import React from "react";

import GlobalStyles from "./styles/Global";

import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";

import { AuthProvider } from "./hooks/AuthContext";
import { ToastProvider } from "./hooks/ToastContext";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ToastProvider>
        <SignIn />
        <GlobalStyles />
      </ToastProvider>
    </AuthProvider>
  );
};

export default App;
