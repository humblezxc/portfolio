import React from "react";

import Header from "../view/Header";
import {Outlet} from "react-router-dom"
import Footer from "../view/Footer";

export default function Layout() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}
