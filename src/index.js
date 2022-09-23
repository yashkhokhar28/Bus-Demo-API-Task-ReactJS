import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddNewBus from "./components/AddNewBus";
import Bus from "./components/Bus";
import BusDetails from "./components/BusDetails";
import Home from "./components/Home";
import Layout from "./components/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/buses" element={<Bus />}></Route>
          <Route path="/buses/:id" element={<BusDetails />}></Route>
          <Route path="/buses/add" element={<AddNewBus />}></Route>
          <Route path="/buses/edit/:id" element={<AddNewBus />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
