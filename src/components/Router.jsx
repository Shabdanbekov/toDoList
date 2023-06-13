import React from "react";
import Checklist from "./CheckList/CheckList";
import Versions from "./Versions/Versions";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Checklist />} path="/" />
        <Route element={<Versions />} path="/mobile/" />
        <Route element={<div>Not found</div>} path="*" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
