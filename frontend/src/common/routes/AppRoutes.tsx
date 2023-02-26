import React from "react";
import {Route, Routes} from "react-router-dom";
import routes from "./Routes";
import Home from "../../home/Home";
import Contact from "../../contact/Contact";

export default function AppRoutes() {
    return(
        <Routes>
            <Route path={routes.HOME} element={<Home/>}/>
            <Route path={routes.CONTACT} element={<Contact/>}/>
        </Routes>
    );
}
