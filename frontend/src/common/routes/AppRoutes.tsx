import React from "react";
import {Route, Routes} from "react-router-dom";
import routes from "./Routes";
import Home from "../../home/Home";

export default function AppRoutes() {
    return(
        <Routes>
            <Route path={routes.HOME} element={<Home />}/>
        </Routes>
    );
}
