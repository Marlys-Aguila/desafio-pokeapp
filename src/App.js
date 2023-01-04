import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarApp from "./components/NavbarApp";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import Detalle from "./views/Detalle";
import NotFound from "./views/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <NavbarApp />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/pokemones/' element={<Pokemones />} />
                <Route path='/pokemones/:nombre' element={<Detalle />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
