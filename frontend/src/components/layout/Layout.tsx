import React from "react";

import Header from "../../common/view/Header";
import {Outlet} from "react-router-dom"
import Footer from "../../common/view/Footer";

export default function Layout() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}
