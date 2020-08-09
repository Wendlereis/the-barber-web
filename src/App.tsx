import React from "react";

import GlobalStyles from "./styles/Global";

// import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App: React.FC = () => {
  return (
    <>
      <SignUp />
      <GlobalStyles />
    </>
  );
};

export default App;
