import { useState } from "react";
import "./App.css";
import Home from "./pages/home/Home";
import Description from "./pages/description/Description";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/desc" element={<Description />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
