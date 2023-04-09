import React from "react";
import {BrowserRouter} from 'react-router-dom';
import AppRoutes from "./common/routes/AppRoutes";
import Header from "./common/view/Header";
import Footer from "./common/view/Footer";

export default function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <AppRoutes/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}
