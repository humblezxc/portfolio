import React from "react";
import {Route, Routes} from "react-router-dom";
import routes from "./Routes";
import Home from "../../home/Home";
import Contact from "../../contact/Contact";
import AboutMe from "../../about/AboutMe";
import ProjectPage from "../../content/ProjectPage";
import Layout from "../../components/layout/Layout";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path={routes.ROOT} element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path={routes.CONTACT} element={<Contact/>}/>
                <Route path={routes.ABOUT} element={<AboutMe/>}/>
                <Route path={`${routes.PROJECT}/:id`} element={<ProjectPage/>}/>
            </Route>
        </Routes>
    );
}
