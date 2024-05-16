import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Produto } from "../pages/Produto";
import { Home } from "../pages/Home";
import { Login } from "../componentes/Login";
import { Carrinho } from "../pages/Carrinho";

export function RouteApp()  {
    return (
        // BrowserRouter é o componente que vai encapsular toda a aplicação
        <BrowserRouter>
            {/* Routes é o componente que vai conter todas as rotas */}
            <Routes>
                {/* Route é o componente que define uma rota */}
                {/* path é o caminho da rota */}
                {/* element é o componente que será renderizado */}
                <Route path="/" element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/produto" element={<Produto/>} />
                <Route path="/carrinho" element={<Carrinho/>} />
            </Routes>
        </BrowserRouter>
    );
}