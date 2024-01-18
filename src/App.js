import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Signin from "./components/Signin";
import View from "./components/View";
import BasicExample from "./components/BasicExample";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Register />} />
                    <Route path="/sign" element={<Signin />} />
                    <Route path="/view" element={<View />} />
                    <Route path="/loader" element={<BasicExample />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
