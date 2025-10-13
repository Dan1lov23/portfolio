import "./app.css";

import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "../pages/Home/page/Home.tsx";

export default function App() {
    return (
        <>
            <div className="app">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}
