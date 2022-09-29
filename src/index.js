import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./pages/admin/Home";
import NotFound from "./pages/NotFound";
import New from "./pages/client/new/New";
import Trending from "./pages/client/trending/Trending";
import Account from "./pages/client/account/Account";
import Collection from "./pages/client/collection/Collection";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={< New/>} />
          <Route path="trend" element={<Trending/>} />
          <Route path="account" element={<Account/>} />
          <Route path="collection" element={<Collection/>} />
          <Route path="*" element={< NotFound/>} />
        </Route>
        <Route path="/admin" element={<Admin/>}>

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
