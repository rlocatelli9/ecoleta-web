import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CreatePoint from "./pages/CreatePoint";
import Home from "./pages/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} patch="/" exact />
      <Route component={CreatePoint} patch="/cadastro" />
    </BrowserRouter>
  );
};

export default Routes;
