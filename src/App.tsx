import React from "react";

import GlobalStyles from "./styles/Global";

import SignIn from "./pages/SignIn";
import { AuthProvider } from "./context/AuthContext";
// import SignUp from "./pages/SignUp";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <SignIn />
      <GlobalStyles />
    </AuthProvider>
  );
};

export default App;
