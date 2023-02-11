import React from "react";
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from "./common/routes/AppRoutes";
import Header from "./common/view/Header";
export default function App(){
    return(
        <BrowserRouter>
            <Header />
            <AppRoutes />
        </BrowserRouter>
    );
}
