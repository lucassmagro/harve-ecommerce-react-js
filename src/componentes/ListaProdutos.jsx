import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import api from '../_service/api';
import { CardProduto } from './CardProduto';

function ListaProdutos() {
    const [produtos, setProdutos] = useState([]); // estado para armazenar os produtos

    useEffect(() => {
        buscarProdutos();
      }, []);
    
      async function buscarProdutos() {
        try {
          const response = await api.get("/productlistbyremark/home");
          setProdutos(response.data);
        } catch (error) {
          mensagemDeErro("Erro para buscar os produtos.");
        }
      }

    // função para exibir mensagem de erro importada do react-toastify
    function mensagemDeErro(mensagem) {
        toast.error(mensagem, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        });
    }

    return (
        <>
            {/* centraliza o conteúdo */}
            <Row className="justify-content-md-center"> 
                {/* Lista de Produtos */}
                <Col md={3}> 
                    <h1>Lista de Produtos</h1>
                </Col>
            </Row>
            <Row>
        {produtos.map((produto, index) => {
          return (
            <Col className="m-2" key={index}>
              <CardProduto
                idProduto={produto.id}
                nome={produto.title}
                preco={produto.price}
                linkImagem={produto.image}
                descricao={produto.category}
              />
            </Col>
          );
        })}
      </Row>
        </>
    );
}

export { ListaProdutos };