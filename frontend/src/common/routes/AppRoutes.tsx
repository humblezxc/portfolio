import React from "react";
import {Route, Routes} from "react-router-dom";
import routes from "./Routes";
import Home from "../../pages/home/Home";
import Contact from "../../pages/contact/Contact";
import AboutMe from "../../pages/about/AboutMe";
import ProjectPage from "../../pages/content/ProjectPage";
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
