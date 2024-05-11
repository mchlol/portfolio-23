import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div style={ {
            minHeight: "100vh"
        }}>
            <Nav />
            <Outlet />
            <Footer />
        </div>
    )
}