import { useEffect, useState } from "react";

function ComponenteNome() {

    const [nome, setNome] = useState("Lucas Santos Magro");

    useEffect(() => {

          //a crase(`) é usada para interpolação de strings
        
          alert(`Foi alterado o nome para ${nome}`)
          
          }, [nome])

          // useEffect é um hook que serve para executar efeitos colaterais em componentes funcionais
          //Observação: o [nome] está preenchido, isso significa que o useEffect será executado sempre que o nome for alterado

  return (
    <div>

        <button onClick={() => setNome("Lucas")}>Alterar para primeiro nome</button>
        <button onClick={() => setNome("Lucas Santos Magro")}>Alterar para nome completo</button>

        <p>Nome: {nome}</p>

    </div>
  );
}

export { ComponenteNome };