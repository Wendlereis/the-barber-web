import React from "react";

import GlobalStyles from "./styles/Global";

import SignIn from "./pages/SignIn";

const App: React.FC = () => {
  return (
    <>
      <SignIn />
      <GlobalStyles />
    </>
  );
};

export default App;
