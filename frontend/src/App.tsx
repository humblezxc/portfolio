import React from "react";
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from "./common/routes/AppRoutes";
import Header from "./common/view/Header";
import Footer from "./common/view/Footer";
export default function App(){
    return(
        <BrowserRouter>
            <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
                <Header />
                <div className="flex-grow-1 d-flex justify-content-center">
                    <AppRoutes />
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}
