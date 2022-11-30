import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Admin from "./pages/admin/home/Home";
import NotFound from "./pages/NotFound";
import New from "./pages/client/new/New";
import Trending from "./pages/client/trending/Trending";
import Account from "./pages/client/account/Account";
import Collection from "./pages/client/collection/Collection";
import Album from "./pages/client/album/Album";
import Category from "./pages/client/category/Category";
import Premium from "./pages/client/premium/Premium";
import Login from "./pages/client/login/Login";
import Signup from "./pages/client/signup/Signup";
import { AppContextProvider } from "./context/AppContextProvider";
import PrivateRoute from "./context/PrivateRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<New />} />
            <Route path="category" element={<Category />} />
            <Route path="trend" element={<Trending />} />
            <Route path="account" element={<Account />} />
            <Route path="collection" element={<Collection />} />
            <Route path="/album/:albumName" element={<Album />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="premium" element={<Premium />} />
          <Route path="admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
        </Routes>
      </HashRouter>
    </AppContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
