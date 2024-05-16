import { ToastContainer } from "react-toastify";
import "./App.css";

import "react-toastify/dist/ReactToastify.css";
import "font-awesome/css/font-awesome.css"
import { RouteApp } from "./route";
import  CarrinhoContextProvider  from "./hooks/CarrinhoContext.js";

function App() {
  return (
    <>
      <CarrinhoContextProvider>
        <ToastContainer />
        <RouteApp />
      </CarrinhoContextProvider>
    </>
  );
}

export default App;