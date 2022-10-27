import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Admin from "./pages/admin/home/Home";
import NotFound from "./pages/NotFound";
import New from "./pages/client/new/New";
import Trending from "./pages/client/trending/Trending";
import Account from "./pages/client/account/Account";
import Collection from "./pages/client/collection/Collection";
import Album from "./pages/client/album/Album";
import Category from "./pages/client/category/Category";

import AdminApp from "./pages/admin/adminapp/AdminApp";
import AdminHome from "./pages/admin/home/Home"
import AdminMusicTracks from "./pages/admin/managesongs/MusicTracks";
import AdminTypeOfSong from "./pages/admin/managesongs/TypeOfSong";
import AdminAlbums from "./pages/admin/managealbum/Albums";
import AdminTypeOfAlbums from "./pages/admin/managealbum/TypeOfAlbum";
import AdminPremium from "./pages/admin/payment/PremiumList";
import SongPurchase from "./pages/admin/payment/SongPurchase";
import ManageAccount from "./pages/admin/manageaccounts/ManageUserAccounts";

import AddTracks from "./pages/admin/managesongs/addtracks";
import AddSongTypes from "./pages/admin/managesongs/addsongtypes";
import AddAccount from "./pages/admin/manageaccounts/Addaccount";
import AddPremium from "./pages/admin/payment/AddPremium";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={< New />} />
          <Route path="category" element={< Category />} />
          <Route path="trend" element={<Trending />} />
          <Route path="account" element={<Account />} />
          <Route path="collection" element={<Collection />} />
          <Route path="/album/:albumName" element={<Album />} />
          <Route path="*" element={< NotFound />} />
        </Route>
        <Route path="/admin" element={<AdminApp />}>
          <Route path="/admin" element={< AdminHome />} />
          <Route path="musictracks" element={< AdminMusicTracks />} />
          <Route path="typeofsong" element={<AdminTypeOfSong />} />
          <Route path="albums" element={<AdminAlbums />} />
          <Route path="typeofalbum" element={<AdminTypeOfAlbums />} />
          <Route path="premium" element={<AdminPremium />} />
          <Route path="songpurchase" element={<SongPurchase />} />
          <Route path="manageaccount" element={<ManageAccount />} />
        </Route>
        <Route path="addtracks" element={<AddTracks />} />
        <Route path="addsongtypes" element={<AddSongTypes />} />
        <Route path="addaccount" element={< AddAccount />} />
        <Route path="addpremium" element={<AddPremium />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
