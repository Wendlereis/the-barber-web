import React from "react";

import GlobalStyles from "./styles/Global";

import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";

import { AuthProvider } from "./hooks/AuthContext";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <SignIn />
      <GlobalStyles />
    </AuthProvider>
  );
};

export default App;
