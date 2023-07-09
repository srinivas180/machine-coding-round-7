import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { Continent } from "./pages/Continent";
import { Country } from "./pages/Country";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/continent/:continentId" element={<Continent />} />
                <Route path="/country/:countryId" element={<Country />} />
            </Routes>
        </div>
    );
}

export default App;
