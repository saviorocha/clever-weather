import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Routes } from "./routes";
import GlobalStyle from "./styles/globals";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>

      {/* <Home /> */}
      <GlobalStyle />
    </>
  );
}

export default App;
