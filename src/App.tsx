import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/homePage/HomePage";


function App() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </Router>
        </>
    );
}

export default App;