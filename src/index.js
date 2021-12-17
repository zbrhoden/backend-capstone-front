import React from "react"
import { render } from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Discounts } from "./components/Discounts.js"
import "./index.css"

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Discounts />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);