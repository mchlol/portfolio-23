import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="layout">
        <div className="topContent">
            <Nav />
            <Outlet />
        </div>
            <Footer />
        </div>
    )
}