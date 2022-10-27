import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../../../components/adminsidenav/SideNav";

function App() {
    return (
        <div >
            <SideNav />
            <Outlet />
        </div>
    );
}

export default App;
