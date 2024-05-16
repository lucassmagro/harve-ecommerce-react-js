import CarouselAnuncios from "../componentes/CaroulselAnuncios";
import { ListaProdutos } from "../componentes/ListaProdutos";
import NavBar from "../componentes/NavBar";



function Home() {
    return (
      <>
        <NavBar>
        <CarouselAnuncios></CarouselAnuncios>
        <ListaProdutos></ListaProdutos>
        </NavBar>
        
      </>
    );
  }

  export { Home };